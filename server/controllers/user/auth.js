


const {
    StatusCodes,
    getReasonPhrase
} = require('http-status-codes');
const asyncWrapper = require('../../error/asyncWrapper');
const UserModel = require('../../models/user');




const loginUser = asyncWrapper(async (req, res) => {
    const user = await UserModel.findById(req.user.id)
    res.status(StatusCodes.OK).json({
        "userId": user._id,
        "token": token,
        "status": StatusCodes.OK
    })
})



const registerUser = asyncWrapper(async (req, res) => {
    const newUser = await UserModel.create(req.body);
    const token = newUser.createJwt();
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





