const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    timeSlot: {
        type: String
    },
    doctorId: {
        type: mongoose.Types.ObjectId
    },
    patientName: {
        type: String
    }
});

const AppointmentModel = mongoose.model("appointment", appointmentSchema);
module.exports = AppointmentModel;

