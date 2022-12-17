const DoctorModel = require("../../models/doctor");
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const CustomError = require("../../error/custom");
const asyncWrapper = require("../../error/asyncWrapper");



//add new doctor
//remove doctor




const registerAdmin = asyncWrapper(async (req, res) => {
    const doctor = await DoctorModel.create(req.body);
    res.status(StatusCodes.OK).json({
        "userId": doctor._id,
        "token": token,
        "status": StatusCodes.OK
    })
})






module.exports = {
    getDoctors,
    getTime
}