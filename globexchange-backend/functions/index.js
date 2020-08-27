const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./util/fbAuth");

const cors = require("cors");
app.use(cors());

const { db } = require("./util/admin");

const {
  getAllReviews,
  postOneReview,
  getReview,
  deleteReview,
} = require("./handlers/reviews");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
  getUserDetails,
} = require("./handlers/users");
const { getAllCountries, getCountry } = require("./handlers/countries");
const {
  getAllUniversities,
  getCountryUniversities,
  getUniversityData,
} = require("./handlers/universities");

// Countries Route
app.get("/countries", getAllCountries);
app.get("/country/:countryId", getCountry);
// TODO: Need to get one country, and all details

// Reviews Routes
app.get("/reviews", getAllReviews);
app.post("/country/:countryId/review", FBAuth, postOneReview);
app.get("/country/:countryId/review/:reviewId", getReview);
app.delete("/country/:countryId/review/:reviewId", FBAuth, deleteReview);

// Users routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);
app.get("/user/:handle", getUserDetails);

// Uni Routes
app.get("/universities", getAllUniversities);
app.get("/country/:countryId/universities", getCountryUniversities);
app.get("/university/:uniId", getUniversityData);

exports.api = functions.region("asia-east2").https.onRequest(app);

// Firebase triggers
exports.onUserImageChange = functions
  .region("asia-east2")
  .firestore.document("/users/{userId}")
  .onUpdate((change) => {
    console.log(change.before.data());
    console.log(change.after.data());
    if (change.before.data().imageUrl !== change.after.data().imageUrl) {
      console.log("image has changed");
      const batch = db.batch();
      return db
        .collection("reviews")
        .where("userHandle", "==", change.before.data().handle)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            const review = db.doc(`/reviews/${doc.id}`);
            batch.update(review, { userImage: change.after.data().imageUrl });
          });
          return batch.commit();
        });
    } else return true;
  });

exports.onReviewDelete = functions
  .region("asia-east2")
  .firestore.document("/reviews/{reviewId}")
  .onDelete((snapshot, context) => {
    const reviewId = context.params.reviewId;
    const batch = db.batch();
    return db
      .collection("comments")
      .where("reviewId", "==", reviewId)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/comments/${doc.id}`));
        });
        return batch.commit();
      })
      .catch((err) => console.error(err));
  });
