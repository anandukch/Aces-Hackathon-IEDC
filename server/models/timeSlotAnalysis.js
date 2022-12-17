const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const timeSlotAnalysisSchema = new mongoose.Schema({
  appointmentDate: {
    type: Date
  },
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

const TimeSlotAnalysisModel = mongoose.model("timeSlotAnalysis", timeSlotAnalysisSchema);
module.exports = TimeSlotAnalysisModel;

