'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        
      },
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
      
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
