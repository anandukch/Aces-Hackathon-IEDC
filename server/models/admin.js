const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  userName:{
    type:String
  },
  password: {
    type: String
  }
});

// adminSchema.pre("save",()=>{

// })
const AdminModel = mongoose.model("Admin", adminSchema);
module.exports = AdminModel;

