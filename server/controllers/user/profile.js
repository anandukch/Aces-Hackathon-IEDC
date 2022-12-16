const UserModel = require("../../models/user");
const asyncWrapper = require("../error/asyncWrapper");
const {StatusCodes,getReasonPhrase}=require('http-status-codes');
const CustomError = require("../../error/custom");

const getUser=asyncWrapper(async(req,res)=>{ //auth with normal token
    const userId=req.user.id;
    const userData=await UserModel.findOne({_id:userId});
    if(!userData) throw new CustomError("user not present",StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json({
        "firstName":userData.firstName,
        "lastName":userData.lastName,
        "passowrd":userData.password,
        "email":userData.email,
        "phoneNumber":userData.phno
    })
})





module.exports={
    getUser
}