const appointmentModel = require("../../models/doctor");
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const CustomError = require("../../error/custom");
const asyncWrapper = require("../../error/asyncWrapper");
const TimeSlotAnalysisModel = require("../../models/timeSlotAnalysis");

const createAppointment = asyncWrapper(async (req, res) => { //auth with normal token
    const appointmentData = await appointmentModel.create(req.body);
    const timeSlotAnalysis = await TimeSlotAnalysisModel.findOne({ doctorId: appointmentData.doctorId, timeSlot: appointmentData.timeSlot })
    if (!timeSlotAnalysis) throw new CustomError("data not present", StatusCodes.BAD_REQUEST);
    timeSlotAnalysis.numberOfPatients = timeSlotAnalysis.numberOfPatients + 1;
    await timeSlotAnalysis.save();
    res.status(StatusCodes.OK).json({
        timeSlot: appointmentData.timeSlot,
        doctorId: appointmentData.doctorId,
        patientId: appointmentData.patientId,
    })
})

const getAppointmentTimeAvailability = asyncWrapper(async (req, res) => {
    const { doctorId, timeSlot } = req.body;
    const timeSlotAnalysis = await TimeSlotAnalysisModel.findOne
        ({ doctorId, timeSlot })
    if (!timeSlotAnalysis) throw new CustomError("data not present", StatusCodes.BAD_REQUEST);
    if(timeSlotAnalysis.numberOfPatients >= timeSlotAnalysis.maxNumberOfPatients) throw new CustomError("time slot not available", StatusCodes.BAD_REQUEST)
    res.status(StatusCodes.OK).json({
        timeSlot: timeSlotAnalysis.timeSlot,
        doctorId: timeSlotAnalysis.doctorId,
        patientId: timeSlotAnalysis.patientId,
    })
})

module.exports = {
    createAppointment
}
