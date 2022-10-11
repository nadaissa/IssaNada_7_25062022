//database configurations import
const db = require("../models/index");

//Model import
const { Like } = db.sequelize.models;



//the like export
exports.likePost = async (req, res, next) => {
    try {
        //defining an already existing like 
        //by user connected (active token) on specific post
        const alreadyLiked = await Like.findOne({
            where:
            {
                userId: req.token.userId,
                postId: req.params.postId
            
            }
        });

        //in case it's true, dislike (delete the like and inform the user)
        if(alreadyLiked) {
            await alreadyLiked.destroy();
            res.status(200).json({message: 'Votre like est supprimé :)'});
        }

        //in case it's not true, create a row in the likes table 
        //by the user connected (token) on the chosen post
        else {
            await Like.create({
                userId: req.token.userId,
                postId: req.params.postId
            });
            //inofrm the user
            res.status(201).json({message: 'Votre like est pris en compte'});
        }
    }
    catch(error){
        res.status(400).json({error});
    }
};

exports.getAllLikes = (req, res, next) => {
    Like.findAll({
      //defining the chronological order of display (according to creation date from recent to old)
      order: [['createdAt', 'DESC']]
    })
      .then(like=> res.status(200).json(like))
      .catch(error => res.status(400).json({ error }));
  };



