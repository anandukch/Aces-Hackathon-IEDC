const {
    StatusCodes,
    getReasonPhrase
} = require('http-status-codes');
const asyncWrapper = require('../../error/asyncWrapper');
const TimeSlotAnalysisModel = require('../../models/timeSlotAnalysis');


const addTimeSlot = asyncWrapper(async (req, res) => {
    const timeSlotData = await TimeSlotAnalysisModel.create(req.body);
    const { appointmentDate, doctorId, timeSlot, numberOfPatients } = timeSlotData;
    res.status(StatusCodes.OK).json({
        appointmentDate,
        doctorId,
        timeSlot,
        numberOfPatients
    })

})


module.exports = {
    addTimeSlot
}
