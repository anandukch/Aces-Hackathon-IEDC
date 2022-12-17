const appointmentModel = require("../../models/doctor");
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const CustomError = require("../../error/custom");
const asyncWrapper = require("../../error/asyncWrapper");

const createAppointment = asyncWrapper(async (req, res) => { //auth with normal token
    const appointmentData = await appointmentModel.create(req.body);
    if (!appointmentData) throw new CustomError("data not present", StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json({
        "timeSlot": appointmentData.timeSlot,
        "doctorId": appointmentData.doctorId,
        "patientId": appointmentData.patientId,
    })

})

module.exports = {
    createAppointment
}
