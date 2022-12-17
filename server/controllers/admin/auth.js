
const {
    StatusCodes,
    getReasonPhrase
} = require('http-status-codes');
const asyncWrapper = require('../../error/asyncWrapper');
const AdminModel = require('../../models/admin');
const jwt = require("jsonwebtoken");



const loginAdmin = asyncWrapper(async (req, res) => {
    const admin = await AdminModel.findById(req.admin.id)
    res.status(StatusCodes.OK).json({
        "adminId": admin._id,
        "token": token,
        "status": StatusCodes.OK
    })
})



const registerAdmin = asyncWrapper(async (req, res) => {
    const newAdmin = await AdminModel.create(req.body);
    const token = jwt.sign({ id: newAdmin._id.toString(), userType: "admin" }, process.env.JWT_SECRET);
    res.status(StatusCodes.OK).json({
        "userId": newAdmin._id,
        "token": token,
        "status": StatusCodes.OK
    })
})


module.exports = {
    loginAdmin,
    registerAdmin
}





