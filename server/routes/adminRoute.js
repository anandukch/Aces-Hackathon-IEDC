const express = require('express');
const router = express.Router();
const {auth} =require('../middlewares/authMiddleware');
const {
    loginAdmin,
    registerAdmin
}=require('../controllers/admin/auth');


const { getAppointment } = require('../controllers/admin/appointment');


///getappointment
router.post('/login', auth, loginAdmin);
router.post('/register', registerAdmin);

module.exports=router;



