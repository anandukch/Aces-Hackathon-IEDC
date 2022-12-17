const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const timeSlotAnalysisSchema = new mongoose.Schema({
  appointmentDate: {
    type: Date
  },
  doctorId: {
    type: String
  },
  timeSlots: {
    type: Array,
    default: []
  },

});

const TimeSlotAnalysisModel = mongoose.model("timeSlotAnalysis", timeSlotAnalysisSchema);
module.exports = TimeSlotAnalysisModel;

