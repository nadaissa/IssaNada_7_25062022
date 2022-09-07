//general imports, controllers and middlewares
const express = require('express');
const userCtrl = require('../controllers/users.controllers');
const passCheck = require('../middleware/password.middleware');
const emailCheck = require('../middleware/email.middleware');
const auth = require('../middleware/auth.middleware');

//router creation, router methods for signing and loging
const router = express.Router();
router.post('/signup', emailCheck, passCheck, userCtrl.signup);

router.post('/login', userCtrl.login);

//user handeling routes
router.get('/:id', auth, userCtrl.getOneUser);

router.get('/', auth, userCtrl.getAllUsers);

router.put('/:id', auth, userCtrl.modifyUser);


//router export
module.exports = router;