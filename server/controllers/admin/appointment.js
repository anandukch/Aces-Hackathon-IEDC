const appointmentModel = require("../../models/docter");
const asyncWrapper = require("../error/asyncWrapper");
const {StatusCodes,getReasonPhrase}=require('http-status-codes');
const CustomError = require("../../error/custom");

const getAppointment=asyncWrapper(async(req,res)=>{ //auth with normal token
    const appointmentData=await appointmentModel.find();
    if(!appointmentData) throw new CustomError("data not present",StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json({
        "timeSlot":appointmentData.timeSlot,
        "docterId":appointmentData.docterId,
        "patientId":appointmentData.patientId,
    })
    
})




module.exports={
    getAppointment
}
