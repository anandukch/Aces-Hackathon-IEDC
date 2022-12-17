const mongoose = require("mongoose");

const admitLog = new mongoose.Schema({
  roomNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  patientName:{
    type:String
  }
});

// admitLog.pre("save",()=>{

// })
const AdmitModel = mongoose.model("User", admitLog);
module.exports = AdmitModel;



