const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const timeSlotAnalysisSchema = new mongoose.Schema({
  appointmentDate: {
    type: Date
  },
  doctorId: {
    type: mongoose.Types.ObjectId
  },
  timeSlots: {
    type: [{
      time: String,
      numberOfPatients: {
        type: Number,
        default: 0
      },
      status: {
        type: String,
        default: "available"
      }
    }],
    default: []
  },

});

const TimeSlotAnalysisModel = mongoose.model("timeSlotAnalysis", timeSlotAnalysisSchema);
module.exports = TimeSlotAnalysisModel;

