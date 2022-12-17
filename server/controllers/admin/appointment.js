const appointmentModel = require("../../models/doctor");
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const CustomError = require("../../error/custom");
const asyncWrapper = require("../../error/asyncWrapper");

const getAppointment = asyncWrapper(async (req, res) => { //auth with normal token
    const appointmentData = await appointmentModel.find();
    if (!appointmentData) throw new CustomError("data not present", StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json({
        "timeSlot": appointmentData.timeSlot,
        "doctorId": appointmentData.doctorId,
        "patientId": appointmentData.patientId,
    })

})




module.exports = {
    getAppointment
}
