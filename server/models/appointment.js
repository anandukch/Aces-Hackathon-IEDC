const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    timeSlot:{
        type:String
    },
    doctorId: {
        type: mongoose.Types.ObjectId
    },
    patientId: {
        type: mongoose.Types.ObjectId
    }
});

const AppointmentModel = mongoose.model("appointment", appointmentSchema);
module.exports = AppointmentModel;

