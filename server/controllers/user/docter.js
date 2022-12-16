const DocterModel = require("../../models/docter");
const asyncWrapper = require("../error/asyncWrapper");
const {StatusCodes,getReasonPhrase}=require('http-status-codes');
const CustomError = require("../../error/custom");

const getDocters=asyncWrapper(async(req,res)=>{ //auth with normal token
    const docterData=await DocterModel.find();
    if(!docterData) throw new CustomError("user not present",StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json({
        "firstName":docterData.firstName,
        "lastName":docterData.lastName,
        "timeAvailible":docterData.timeAvailible,
        "email":docterData.email,
        "phoneNumber":docterData.phno
    })
})



module.exports={
    getDocters
}