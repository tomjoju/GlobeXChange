const { db } = require("../util/admin");

const isEmpty1 = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

exports.getAllReviews = (req, res) => {
  db.collection("reviews")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let reviews = [];
      data.forEach((doc) => {
        reviews.push({
          reviewid: doc.id,
          ...doc.data(),
        });
      });
      return res.json(reviews);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.postOneReview = (req, res) => {
  const newReview = {
    country: req.body.country,
    city: req.body.city,
    placeName: req.body.placeName,
    body: req.body.body,
    rating: req.body.rating,
    countryId: req.params.countryId,
    userHandle: req.user.handle,
    userImage: req.user.imageUrl,
    createdAt: new Date().toISOString(),
    commentCount: 0,
  };

  let errors = {};

  if (isEmpty1(newReview.country)) errors.country = "Must not be empty";
  if (isEmpty1(newReview.city)) errors.city = "Must not be empty";
  if (isEmpty1(newReview.placeName)) errors.placeName = "Must not be empty";
  if (isEmpty1(newReview.body)) errors.body = "Must not be empty";
  if (isEmpty1(newReview.rating)) errors.rating = "Must not be empty";

  if (Object.keys(errors).length > 0) return res.status(400).json(errors);

  db.collection("reviews")
    .add(newReview)
    .then((doc) => {
      const resReview = newReview;
      resReview.reviewId = doc.id;
      res.json(resReview);
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

// Fetch one Review
exports.getReview = (req, res) => {
  let reviewData = {};
  db.doc(`/reviews/${req.params.reviewId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Review not found" });
      }
      reviewData = doc.data();
      reviewData.reviewId = doc.id;
      return db
        .collection("comments")
        .orderBy("createdAt", "desc")
        .where("reviewId", "==", req.params.reviewId)
        .get();
    })
    .then((data) => {
      reviewData.comments = [];
      data.forEach((doc) => {
        reviewData.comments.push(doc.data());
      });
      return res.json(reviewData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.deleteReview = (req, res) => {
  const document = db.doc(`/reviews/${req.params.reviewId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Review not found" });
      }
      if (doc.data().userHandle !== req.user.handle) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Review deleted uccessfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
