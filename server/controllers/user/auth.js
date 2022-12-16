const {
    userModel
} =require('../../models/user');


const {
    StatusCodes,
    getReasonPhrase
}=require('http-status-codes');




const loginUser=asyncWrapper(async(req,res)=>{
    const user=req.userDb;
    const token=user.createJwt();
    res.status(StatusCodes.OK).json({
        "userId":user._id,
        "token":token,
        "status":StatusCodes.OK
    })
})



const registerUser=asyncWrapper(async(req,res)=>{
    const newUser=await userModel.create(req.body);
    const token=newUser.createJwt();
    res.status(StatusCodes.OK).json({
        "userId":newUser._id,
        "token":token,
        "status":StatusCodes.OK
    })
})


module.exports={
    loginUser,
    registerUser
}





