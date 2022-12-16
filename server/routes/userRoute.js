const express = require('express');
const router = express.Router();

const {
   auth
} = require('../middlewares/authMiddleware');

const {
  getUser
}=require('../controllers/user/profile');


const {
  loginUser,
  registerUser,
} = require('../controllers/user/auth');


const {
  getDocters,
  getTime
} = require('../controllers/user/docter');

router.post('/login', auth, loginUser);
router.post('/register',  registerUser);
router.get('/profile',auth, getUser);
router.get('/docter',getDocters);
router.get('/docter/:id',getTime);




module.exports = router;
