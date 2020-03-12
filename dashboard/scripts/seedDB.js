const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB ||
  "mongodb://localhost/Users"
);

const dataSeed = [
  {
    steps: 723,
    heartrate: 63,
    sleep: 7,
    bodybattery: 82,
    date: 'new Date(Date.now())'
  }
];

db.Data
  .remove({})
  .then(() => db.Data.collection.insertMany(dataSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });