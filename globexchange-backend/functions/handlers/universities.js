const { db } = require("../util/admin");

exports.getAllUniversities = (req, res) => {
  db.collection("universities")
    .orderBy("uniName", "asc")
    .get()
    .then((data) => {
      let universities = [];
      data.forEach((doc) => {
        universities.push({
          uniId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(universities);
    })
    .catch((err) => console.error(err));
};

exports.getCountryUniversities = (req, res) => {
  let countryUniversities = [];
  db.doc(`/countries/${req.params.countryId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "University not found" });
      }
      return db
        .collection("universities")
        .orderBy("uniName", "asc")
        .where("countryId", "==", req.params.countryId)
        .get();
    })
    .then((data) => {
      data.forEach((doc) => {
        countryUniversities.push({
          uniId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(countryUniversities);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.getUniversityData = (req, res) => {
  let uniData = {};
  db.doc(`/universities/${req.params.uniId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "University not found" });
      }
      uniData.university = doc.data();
      uniData.university.uniId = doc.id;
      return db
        .collection("users")
        .orderBy("createdAt", "desc")
        .where("uni", "==", uniData.university.uniName)
        .get();
    })
    .then((data) => {
      uniData.users = [];
      data.forEach((doc) => {
        uniData.users.push({
          ...doc.data(),
        });
      });
      return res.json(uniData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
