const { db } = require("../util/admin");

exports.getAllCountries = (req, res) => {
  db.collection("countries")
    .orderBy("countryName", "asc")
    .get()
    .then((data) => {
      let countries = [];
      data.forEach((doc) => {
        countries.push({
          countryId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(countries);
    })
    .catch((err) => console.error(err));
};

exports.getCountry = (req, res) => {
  let countryData = {};
  db.doc(`/countries/${req.params.countryId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Country not found" });
      }
      countryData.country = doc.data();
      countryData.country.countryId = doc.id;
      return db
        .collection("reviews")
        .orderBy("createdAt", "desc")
        .where("countryId", "==", req.params.countryId)
        .get();
    })
    .then((data) => {
      countryData.reviews = [];
      data.forEach((doc) => {
        countryData.reviews.push({
          reviewId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(countryData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
