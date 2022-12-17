const {
    StatusCodes,
    getReasonPhrase
} = require('http-status-codes');
const asyncWrapper = require('../../error/asyncWrapper');
const TimeSlotAnalysisModel = require('../../models/timeSlotAnalysis');


const addTimeSlot = asyncWrapper(async (req, res) => {
    const { doctorId, timeSlots, date } = req.body
    // const timeSlotsData = Object.keys(timeSlots).map(time => {
    //     return {
    //         time: time,
    //         numberOfPatients: 0,
    //         status: "available"

    //     }
    // })
    const timeSlotData = await TimeSlotAnalysisModel.create({
        appointmentDate: date,
        doctorId,
        timeSlots
    })
    // const { appointmentDate, doctorId, timeSlot, numberOfPatients } = timeSlotData;
    res.status(StatusCodes.OK).json(timeSlotData)

})


module.exports = {
    addTimeSlot
}
