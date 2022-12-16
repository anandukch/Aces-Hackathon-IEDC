const express = require('express');
const router = express.Router();

const {
  matchToken, auth
} = require('../middlewares/authMiddleware');


const {
  loginUser,
  registerUser,
} = require('../controllers/user/auth');

router.post('/login', auth, loginUser);
router.route('/register', registerUser);


module.exports = router;
