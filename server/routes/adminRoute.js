const express = require('express');
const router = express.Router();
const {auth} =require('../middlewares/authMiddleware');
const {
    loginAdmin,
    registerAdmin
}=require('../controllers/admin/auth');


const { getAppointment } = require('../controllers/admin/appointment');
const { addTimeSlot } = require('../controllers/admin/timeslot');
const { addDoctorDetails, editDoctorDetails } = require('../controllers/admin/doctor');

///getappointment
router.post('/login', auth, loginAdmin);
router.post('/register', registerAdmin);
router.post('/create-time-slot',auth ,addTimeSlot);


//add route for adding and remove doctor

router.post('/add-doctor',addDoctorDetails);
router.patch('/edit-doctor',editDoctorDetails);




module.exports=router;



