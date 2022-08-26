//database configurations import
const db = require("../models/index");

//file system import to delete or modify posts
const fs = require('fs');

//Model import
const { Post } = db.sequelize.models;

//functions for post handeling, the identification by the userId token is imposed for deleting and modifying
//post creation function export to be used in routes file
exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    const post = new Post({
     ...postObject,
     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    post.save()
      .then(() => res.status(201).json({ message: 'Votre post est publié !'}))
      .catch(error => res.status(400).json({ error }));
    };


//post modification function export to be used in routes file
exports.modifyPost = (req, res, next) => {
   Post.findOne({ id: req.params.id })
   .then(post =>{
    const postObject = req.file ?
    { 
      ...JSON.parse(req.body.post),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body};

    if(postObject.userId === req.token.userId ) {
      Post.updateOne({ id: req.params.id }, {...postObject, id: req.params.id})
      .then(() => res.status(200).json({ message: 'Votre post est modifié !'}))
      .catch(error => res.status(400).json({ error }));
    } else {
      res.status(403).json({ error: "Vous ne pouvez pas modifier ce post"})
    }
   }) 
    .catch(error => res.status(500).json({ error }));  
  };

//post deleting function export to be used in routes file
exports.deletePost = (req, res, next) => {
    Post.findOne({ id: req.params.id })
    .then(post => {
      if (post.userId === req.token.userId || req.token.admin) {
        
        const filename = post.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          post.deleteOne({ id: req.params.id })
            .then(() => res.status(200).json({ message: 'Votre post est supprimé!'}))
            .catch((error) => res.status(400).json({ error }));
          });
      } else {
        res.status(403).json({ error: "Vous ne pouvez pas supprimer ce post"})
      }
    })
    .catch((error) => res.status(500).json({ error }));
  };

//post search function export to be used in routes file
exports.getOnePost = (req, res, next) => {
    Post.findOne({ id: req.params.id, include: db.User })
      .then(post => res.status(200).json(post))
      .catch(error => res.status(404).json({ error }));
  };


//all posts search function export to be used in routes file

exports.getAllPosts = (req, res, next) => {

    //defining the chronological order of display (according to user id from recent to old)
    const conditions = { include: db.User, order: [['id', 'DESC']]};
    if(req.query.userId){
        conditions.where = {
            userId: parseInt(req.query.userId)
        }
    }; 
    
    
    Post.findAll()
        .then(post => res.status(200).json(post))
        .catch(error => res.status(400).json({ error }));
    };
