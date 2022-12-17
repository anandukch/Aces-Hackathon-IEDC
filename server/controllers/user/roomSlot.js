const {
    StatusCodes,
    getReasonPhrase
} = require('http-status-codes');
const asyncWrapper = require('../../error/asyncWrapper');
const RoomSlotModel = require('../../models/roomSchema');


const getRoomSlot = asyncWrapper(async (req, res) => {
    const roomData = await RoomSlotModel.find(req.body);
    const {roomNo,patientName,timeSlot,numberOfVisitors}=roomData;
    res.status(StatusCodes.OK).json({
        roomNo,
        patientName,
        timeSlot,
        numberOfVisitors
    })
})


module.exports={
    getRoomSlot
}