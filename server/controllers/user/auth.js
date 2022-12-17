
const {
    StatusCodes,
    getReasonPhrase
} = require('http-status-codes');
const asyncWrapper = require('../../error/asyncWrapper');
const UserModel = require('../../models/user');
const jwt = require("jsonwebtoken");



const loginUser = asyncWrapper(async (req, res) => {
    const user = await UserModel.findById(req.user.id)
    const token = jwt.sign({ id: user._id.toString(), userType: "normal" }, process.env.JWT_SECRET);
    res.status(StatusCodes.OK).json({
        "userId": user._id,
        "token": token,
        "status": StatusCodes.OK
    })
})



const registerUser = asyncWrapper(async (req, res) => {
    const newUser = await UserModel.create(req.body);
    const token = jwt.sign({ id: newUser._id.toString(), userType: "normal" }, process.env.JWT_SECRET);
    res.status(StatusCodes.OK).json({
        "userId": newUser._id,
        "token": token,
        "status": StatusCodes.OK
    })
})


module.exports = {
    loginUser,
    registerUser
}





