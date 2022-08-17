'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    class User extends Model {

      static associate(models) {
        User.hasMany(models.Post)
        User.hasMany(models.Like)
      }
    };
    
    User.init({
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        validate : {
          isEmail: true,
          notNull: {
            msg: 'Merci de renseignez votre email'
          }
        }
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate :{
          notNull: {
            msg: 'Merci de renseignez votre prénom'
          }          
        }
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate :{
          notNull: {
            msg: 'Merci de renseignez votre nom de famille'
          }          
        }
      },
      bio :{
        type: Sequelize.TEXT,
        allowNull: true
      },
      picture: {
        type: Sequelize.STRING(255),
      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'User',
    }
    );
    return User;
  };



  /*const User = sequelize.define("user", {
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    });*/