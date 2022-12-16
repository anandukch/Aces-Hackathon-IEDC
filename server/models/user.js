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
userSchema.methods.createJWT = async function () {
  const user = this;
  const token = jwt.sign({ id: user._id.toString(), userType: "normal" }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

