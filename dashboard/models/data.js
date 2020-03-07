const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  steps: { 
      type: Number, 
      ref: '_id' 
    },
  heartrate: { 
      type: Number, 
      ref: '_id' 
    },
  date: { 
      type: Date, 
      default: Date.now, 
      ref: '_id' 
    },
  user: {
      type: Schema.Types.ObjectId,
      ref: "users"
  }
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;