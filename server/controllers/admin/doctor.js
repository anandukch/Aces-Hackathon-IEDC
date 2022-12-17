const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../../error/asyncWrapper");
const DoctorModel = require("../../models/doctor");

const addDoctorDetails = asyncWrapper(async (req, res) => {
  const newDoctor = await DoctorModel.create(req.body);
  return res.status(StatusCodes.OK).json({
    doctorId: newDoctor._id,

  })
})