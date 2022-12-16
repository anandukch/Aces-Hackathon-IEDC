const DocterModel = require("../../models/docter");
const asyncWrapper = require("../error/asyncWrapper");
const {StatusCodes,getReasonPhrase}=require('http-status-codes');
const CustomError = require("../../error/custom");

const getDocters=asyncWrapper(async(req,res)=>{ //auth with normal token
    const docterData=await DocterModel.find();
    if(!docterData) throw new CustomError("data not present",StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json({
        "firstName":docterData.firstName,
        "lastName":docterData.lastName,
        "timeAvailible":docterData.timeAvailible,
        "email":docterData.email,
        "phoneNumber":docterData.phno
    })
    
})


const getTime=asyncWrapper(async(req,res)=>{
    const {id}=req.params;
    if(!id) throw new CustomError("no data present",StatusCodes.BAD_REQUEST);
    const docterData=await DocterModel.findById({_id:id});

    if(!docterData) throw new CustomError("no data present",StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json({
        "timeAvailible":docterData.timeAvailible,
    })
})



module.exports={
    getDocters,
    getTime
}