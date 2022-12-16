const express = require('express');
const router = express.Router();


const { getAppointment } = require('../controllers/admin/appointment');


///getappointment
router.get('/getappointment',getAppointment);

module.exports=router;



