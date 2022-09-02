//general imports, controllers and middlewares
const express = require('express');
const likesCtrl = require("../controllers/likes");
const auth = require('../middleware/auth');

//router creation
const router = express.Router();

//routes for post liking
router.post('/:postId/like', auth, likesCtrl.likePost);


//router export
module.exports = router;