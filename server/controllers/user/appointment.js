const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const CustomError = require("../../error/custom");
const asyncWrapper = require("../../error/asyncWrapper");
const TimeSlotAnalysisModel = require("../../models/timeSlotAnalysis");
const AppointmentModel = require("../../models/appointment");

const createAppointment = asyncWrapper(async (req, res) => { //auth with normal token
    const appointmentData = await AppointmentModel.create(req.body);
    const timeSlotAnalysis = await TimeSlotAnalysisModel.findOne({ doctorId: req.body.doctorId, appointmentDate: req.body.date })
    if (!timeSlotAnalysis) throw new CustomError("data not present", StatusCodes.BAD_REQUEST);
    let timeSlots = timeSlotAnalysis.timeSlots
    timeSlots = timeSlots.map(timeSlot => {
        if (timeSlot) {
            if (timeSlot.time == req.body.time) {
                timeSlot.numberOfPatients = timeSlot.numberOfPatients + 1;
                if (timeSlot.numberOfPatients >= 10) {
                    timeSlot.status = "not available"
                }
            }
        }
    })
    timeSlotAnalysis.timeSlots = timeSlots


    await timeSlotAnalysis.save();
    res.status(StatusCodes.OK).json({
        timeSlot: appointmentData.timeSlot,
        doctorId: appointmentData.doctorId,
        patientId: appointmentData.patientId,
    })
})

const getAppointmentTimeAvailability = asyncWrapper(async (req, res) => {
    console.log(req.body);
    const { doctorId, date } = req.body;
    let timeSlotAnalysis
    timeSlotAnalysis = await TimeSlotAnalysisModel.findOne
        ({ doctorId, appointmentDate: date })
<<<<<<< HEAD
=======
    if (!timeSlotAnalysis) {
        timeSlotAnalysis = await TimeSlotAnalysisModel.create({
            doctorId, appointmentDate: date
        })
    }
    // timeSlotAnalysis.timeSlots.map(timeSlot => {

    // })
>>>>>>> 5deb1b7345fd3b911275ddb3fa58ed6aeeaa343b
    // if (!timeSlotAnalysis) throw new CustomError("data not present", StatusCodes.BAD_REQUEST);
    // if (timeSlotAnalysis.numberOfPatients >= timeSlotAnalysis.maxNumberOfPatients) throw new CustomError("time slot not available", StatusCodes.BAD_REQUEST)
    res.status(StatusCodes.OK).json(timeSlotAnalysis)
})

module.exports = {
    createAppointment,
    getAppointmentTimeAvailability
}
