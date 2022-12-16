const express=require('express');
const router=express.Router();

const {
    matchToken
} =require('../middlewares/authMiddleware');


const {
    loginUser,
    registerUser,
}=require('../controllers/user/auth');




router.route('/login').post(matchToken,loginUser);
router.route('/register').post(registerUser);


module.exports=router;
