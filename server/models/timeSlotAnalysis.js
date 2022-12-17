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
    type: Number,
    default: 0
  },
  maxNumberOfPatients: {
    type: Number,
    default: 10
  },
  status: {
    type: String,
    default: "available"
  }
});

const TimeSlotAnalysisModel = mongoose.model("timeSlotAnalysis", timeSlotAnalysisSchema);
module.exports = TimeSlotAnalysisModel;

