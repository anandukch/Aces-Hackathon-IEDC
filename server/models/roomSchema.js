const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNo: {
    type: Number,
    unique: true,
    required: true,
  },
  patientName: {
    type: String
  },
  timeSlot: {
    type: String,
    unique: true,
    required: true,
  },
  numberOfVisitors: {
    type: Number,
    default: 0,
  }
});

// roomSchema.pre("save",()=>{

// })
const RoomSlotModel = mongoose.model("User", roomSchema);
module.exports = RoomSlotModel;



