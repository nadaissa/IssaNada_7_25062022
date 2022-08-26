'use strict';

const { Model } = require('sequelize');



module.exports = (sequelize, Sequelize) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {foreingnKey: 'userId'}, {onDelete: 'cascade', hooks:true})
      Post.hasMany(models.Like)
    }

  };
    
  Post.init({
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },      
      postContent: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      postMedia: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      /*creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, 
        allowNull: false       
      },*/
    },
      {
        sequelize,
        modelName: 'Post',
    
    });
    return Post;
  };


