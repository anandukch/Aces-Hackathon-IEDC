const router = require('express').Router()
const { getDoctors } = require('../controllers/user/doctor');
const { auth } = require('../middlewares/authMiddleware')


router.get("/doctors", getDoctors)

module.exports = router;