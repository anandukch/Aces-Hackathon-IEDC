const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true
  },
  name: {
    type: String
  },
  phno: {
    type: String
  },
  timeAvailable: {
    type: Date
  },
  specialization:{
    type:String
  }
});

// doctorSchema.pre("save",()=>{

// })
const DoctorModel = mongoose.model("Doctor", doctorSchema);
module.exports = DoctorModel;

