'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        onDelete: 'CASCADE'        
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      } 
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};
