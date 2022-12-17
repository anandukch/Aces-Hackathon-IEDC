const DoctorModel = require("../../models/doctor");
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const CustomError = require("../../error/custom");
const asyncWrapper = require("../../error/asyncWrapper");

const getDoctors = asyncWrapper(async (req, res) => { //auth with normal token
    const doctorData = await DoctorModel.find({});
    console.log(doctorData);
    // if (!doctorData) throw new CustomError("data not present", StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json(doctorData)

})


const getTime = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    if (!id) throw new CustomError("no data present", StatusCodes.BAD_REQUEST);
    const doctorData = await DoctorModel.findById({ _id: id });
    if (!doctorData) throw new CustomError("no data present", StatusCodes.BAD_REQUEST);
    res.status(StatusCodes.OK).json({
        "timeAvailable": doctorData.timeAvailable,
    })
})



module.exports = {
    getDoctors,
    getTime
}