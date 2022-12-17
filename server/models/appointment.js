const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
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

const appointmentModel = mongoose.model("appointment", appointmentSchema);
module.exports = appointmentModel;

