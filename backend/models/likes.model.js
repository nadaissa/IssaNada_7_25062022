'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Like extends Model{
    static associate(models){
      Like.belongsTo(models.User, {foreignKey: 'id'}, { onDelete: 'cascade', hooks: true })
      Like.belongsTo(models.Post, {foreignKey: 'id'}, { onDelete: 'cascade', hooks: true })
    }

  };  

  Like.init({
      userId : {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      postId : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    },
      {
        sequelize,
        modelName: 'Like',  
      
    });
    return Like;
  };



