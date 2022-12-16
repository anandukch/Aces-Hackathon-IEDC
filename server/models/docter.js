const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const docterSchema = new mongoose.Schema({
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
  phno: {
    type: String
  },
  timeAvailible:{
    type:Date
  }
});

// docterSchema.pre("save",()=>{

// })
const DocterModel = mongoose.model("Docter", docterSchema);
module.exports = DocterModel;

