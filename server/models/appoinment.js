const mongoose = require("mongoose");

const appoinmentSchema = new mongoose.Schema({
    timeSlot:{
        type:String
    },
    docterId: {
        type: mongoose.Types.ObjectId
    },
    patientId: {
        type: mongoose.Types.ObjectId
    }
});

// appoinmentSchema.pre("save",()=>{

// })
const AppoinmentModel = mongoose.model("User", appoinmentSchema);
module.exports = AppoinmentModel;

