const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
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
  // {
  //   steps: 812,
  //   date: 'monday'
  // },
  // {
  //   steps: 915,
  //   date: 'tuesday'
  // },
  // {
  //   steps: 1000,
  //   date: 'wednesday'
  // },
  // {
  //   steps: 315,
  //   date: 'thursday'
  // }, {
  //   steps: 548,
  //   date: 'friday'
  // },
  // {
  //   steps: 618,
  //   date: 'saturday'
  // },
  // {
  //   steps: 728,
  //   date: 'sunday'
  // }
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