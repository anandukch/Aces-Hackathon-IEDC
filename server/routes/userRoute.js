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
const { createAppointment } = require('../controllers/user/appointment');

router.post('/login', auth, loginUser);
router.post('/register', registerUser);
router.get('/profile', auth, getUser);
router.get('doctor', getDoctors);
router.get('doctor', getTime);

//common

router.get('/getappointment',auth, getAppointment);

//create appointment

router.post('/createappointment',auth,createAppointment);

///getappointment


module.exports = router;
