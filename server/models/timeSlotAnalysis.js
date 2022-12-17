const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const timeSlotAnalysisSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Types.ObjectId
  },
  timeSlot: {
    type: String
  },
  numberOfPatients: {
    type: Number
  }
});

// userSchema.pre("save",()=>{

// })
const TimeSlotAnalysisModel = mongoose.model("timeSlotAnalysis", timeSlotAnalysisSchema);
module.exports = TimeSlotAnalysisModel;

