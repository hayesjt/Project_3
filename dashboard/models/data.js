// Schema for all Mongo database tables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'This field is required']
    },
    lastName: {
        type: String,
        required: [true, 'This field is required']
    },
    email: {
        type: email,
        required: [true, 'This field is required']
    },
    password: {
        type: String,
        required: [true, 'This field is required']
    }
})

const UserData = mongoose.model('userdata', UserSchema);

module.exports = UserData;