//general imports, controllers and middlewares
const express = require('express');
const likesCtrl = require("../controllers/likes.controllers");
const auth = require('../middleware/auth.middleware');

//router creation
const router = express.Router();

//routes for post liking
router.post('/:postId/like', auth, likesCtrl.likePost);


//router export
module.exports = router;