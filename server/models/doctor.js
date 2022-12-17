const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  name: {
    type: String
  },
  phno: {
    type: String
  },
  timeAvailable: {
    type: Date
  }
});

// doctorSchema.pre("save",()=>{

// })
const DoctorModel = mongoose.model("Doctor", doctorSchema);
module.exports = DoctorModel;

