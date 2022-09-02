//general imports, controllers and middlewares
const express = require('express');
const userCtrl = require('../controllers/users');
const passCheck = require('../middleware/passCheck');
const emailCheck = require('../middleware/emailCheck');
const auth = require('../middleware/auth');

//router creation, router methods for signing and loging
const router = express.Router();
router.post('/signup', emailCheck, passCheck, userCtrl.signup);

router.post('/login', userCtrl.login);

//user handeling routes
router.get('/:id', auth, userCtrl.getOneUser);

router.get('/', auth, userCtrl.getAllUsers);


//router export
module.exports = router;