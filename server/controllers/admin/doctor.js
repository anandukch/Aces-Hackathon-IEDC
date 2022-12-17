

const DoctorModel = require("../../models/doctor");
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const CustomError = require("../../error/custom");
const asyncWrapper = require("../../error/asyncWrapper");


const addDoctorDetails = asyncWrapper(async (req, res) => {
  const newDoctor = await DoctorModel.create(req.body);
  return res.status(StatusCodes.OK).json({
    doctorId: newDoctor._id,
  })
})

const editDoctorDetails = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  if (!id) throw new CustomError("no data present", StatusCodes.BAD_REQUEST);
  const doctorData = await DoctorModel
    .findById
    ({ _id: id });
  if (!doctorData) throw new CustomError("no data present", StatusCodes.BAD_REQUEST);
  res.status(StatusCodes.OK).json({
    timeAvailable: doctorData.timeAvailable,
  })
})





module.exports = {
  editDoctorDetails,
  addDoctorDetails
}

