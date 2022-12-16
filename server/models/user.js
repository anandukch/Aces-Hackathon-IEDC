const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  },
  phno: {
    type: String
  }
});

// userSchema.pre("save",()=>{

// })
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

