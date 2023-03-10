const express = require('express');
const router = express.Router();

const {
  auth
} = require('../middlewares/authMiddleware');

const {
  getUser
} = require('../controllers/user/profile');


const {
  loginUser,
  registerUser,
} = require('../controllers/user/auth');


const {
  getDoctors,
  getTime
} = require('../controllers/user/doctor');
const { getAppointment } = require('../controllers/admin/appointment');
const { createAppointment, getAppointmentTimeAvailability } = require('../controllers/user/appointment');
const { getRoomSlot } = require('../controllers/user/roomSlot');

router.post('/login', auth, loginUser);
router.post('/register', registerUser);
router.get('/profile', auth, getUser);
router.get('/doctor', getDoctors);
router.get('/doctor', getTime);

//common

router.get('/get-appointment', auth, getAppointment);

//create appointment

router.post('/create-appointment', createAppointment);

///getappointment 

router.post('/available', getAppointmentTimeAvailability);


//get room slot by name

router.get('/patient-details',getRoomSlot);


module.exports = router;
