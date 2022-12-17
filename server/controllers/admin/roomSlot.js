//create time slot 


const {
    StatusCodes,
    getReasonPhrase
} = require('http-status-codes');
const asyncWrapper = require('../../error/asyncWrapper');
const RoomSlotModel = require('../../models/roomSchema');





const createRoomSlot = asyncWrapper(async (req, res) => {
    const roomData = await RoomSlotModel.create(req.body);
    const {roomNo,patientName,timeSlot,numberOfVisitors}=roomData;
    res.status(StatusCodes.OK).json({
        roomNo,
        patientName,
        timeSlot,
        numberOfVisitors
    })
})


module.exports={
    createRoomSlot
}
