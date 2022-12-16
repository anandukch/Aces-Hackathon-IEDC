const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 13,
  },
  gstNumber: { type: String, minlength: 15 },
  address: { type: String, required: true },
  panNumber: {
    type: String,
    minlength: 10,
    required: true,
  },
  legalName: { type: String, required: true },
  isApproveterms: {
    type: Boolean,
    default: true,
  },
  smsConsent: { type: Boolean },
});

userSchema.methods.createJWT = async function () {
  const user = this;
  const token = jwt.sign({ id: user._id.toString(),userType:"normal"}, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};


// module.exports = mongoose.model("user", userSchema);


const userModel=mongoose.model("User",userSchema);
module.exports=userModel;

