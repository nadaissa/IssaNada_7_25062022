//database configurations import
const db = require("../models/index");

//file system import to delete or modify posts
const fs = require('fs');
//Model import
const { Post } = db.sequelize.models;
const { User } = db.sequelize.models;
const { Like } = db.sequelize.models;
//functions for post handeling, the identification by the userId token is imposed for deleting and modifying
//post creation function export to be used in routes file
exports.createPost = async (req, res, next) => {
  try {
      const post = new Post({
          userId: req.token.userId,
          postContent: req.body.postContent,
          postMedia: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : '',

      })
      
      const savedPost = await post.save();
      return res.status(201).json({message: "Votre post est publié", post: savedPost});
  }
  catch (error) {
      if (req.file)
        await fs.unlink(`images/${req.file.filename}`);
      console.error(error);
      res.status(500).json({message: "Internal server error"});
  }
}

//post modification function export to be used in routes file
exports.modifyPost = (req, res, next) => {
   Post.findByPk(req.params.id)
   .then(post =>{
    const postObject = req.file ?
    { 
      //...JSON.parse(req.body.post),
      postContent: req.body.postContent,
      postMedia: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body};

    if(post.userId === req.token.userId || req.token.admin === true) {
      if(req.file){
        const filename = post.postMedia.split('/images/')[1];
        fs.unlink(`images/${filename}`, () =>{
          Post.update({...postObject, id: req.params.id}, { where: {id: req.params.id }})
          .then(() => res.status(200).json({ message: 'Votre post est modifié !'}))
          .catch(error => res.status(400).json({ error }));
        })
      }else{
        Post.update({...postObject, id: req.params.id}, { where: {id: req.params.id }})
          .then(() => res.status(200).json({ message: 'Votre post est modifié !'}))
          .catch(error => res.status(400).json({ error }));
      }
      
    } else {
      res.status(403).json({ error: "Vous ne pouvez pas modifier ce post"})
    }
   }) 
    .catch(error => res.status(500).json({ error }));  
  };

//post deleting function export to be used in routes file
exports.deletePost = (req, res, next) => {
    Post.findByPk (req.params.id)
    .then(post =>{
      if(post.userId === req.token.userId || req.token.admin === true) {
        const filename = post.postMedia.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Post.destroy({ where: { id: req.params.id } })
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
  Post.findByPk(
    req.params.id,
    {
      include: [
        {
        model: User,
        attributes : ['id', 'firstName', 'lastName', 'picture']
      },
      {
        model: Like,

      }]
    }
    )
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
};


//all posts search function export to be used in routes file

exports.getAllPosts = (req, res, next) => {
  Post.findAll({
    //defining the chronological order of display (according to creation date from recent to old)
    order: [['createdAt', 'DESC']],
    include: [
      {
      model: User,
      attributes : ['id', 'firstName', 'lastName', 'picture']
    },
    {
      model: Like
    }],
   
  })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(400).json({ error }));
};
