const express = require('express');
const router = express.Router();
const {auth} =require('../middlewares/authMiddleware');
const {
    loginAdmin,
    registerAdmin
}=require('../controllers/admin/auth');


const { getAppointment } = require('../controllers/admin/appointment');
const { addTimeSlot } = require('../controllers/admin/timeslot');


///getappointment
router.post('/login', auth, loginAdmin);
router.post('/register', registerAdmin);
router.post('/createtimeslot',auth ,addTimeSlot);

module.exports=router;



