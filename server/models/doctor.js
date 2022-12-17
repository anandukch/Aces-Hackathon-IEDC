const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const doctorSchema = new mongoose.Schema({
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
const DoctorModel = mongoose.model("Doctors", doctorSchema);
module.exports = DoctorModel;

