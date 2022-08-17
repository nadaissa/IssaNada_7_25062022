module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
      userId : {
        type: Sequelize.STRING,
        allowNull: false
      },      
      content: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      media: {
        type: Sequelize.STRING,
        allowNull: true
      },
      creationDate: {
        type: Sequelize.DATE,
        
      }
    });
    return Post;
  };

 
