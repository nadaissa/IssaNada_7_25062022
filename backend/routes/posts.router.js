//general imports, controllers and middlewares
const express = require('express');
const postsCtrl = require("../controllers/posts.controllers");
const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config.middleware');


//router creation, router methods for finding, creating and modifying posts
//CRUD actions, endpoints, middlewares and functions (in controllers file)
const router = express.Router();

router.get('/', auth, postsCtrl.getAllPosts);

router.get('/:id', auth, postsCtrl.getOnePost);

router.post('/', auth, multer, postsCtrl.createPost);

router.put('/:id', auth, multer, postsCtrl.modifyPost);

router.delete('/:id', auth, postsCtrl.deletePost);



//router export
module.exports = router;