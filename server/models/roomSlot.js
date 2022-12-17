const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  timeSlot: {
    type: String,
    unique: true,
    required: true,
  },
  numberofVistors:{
    type:Number
  }
});

// roomSchema.pre("save",()=>{

// })
const RoomSlotModel = mongoose.model("User", roomSchema);
module.exports = RoomSlotModel;



