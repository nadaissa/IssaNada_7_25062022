module.exports = (sequelize, Sequelize) => {
    const Like = sequelize.define("like", {
      userId : {
        type: Sequelize.STRING,
        allowNull: false
      },

      postId : {
        type: Sequelize.STRING,
        allowNull: false
      },       
      
    });
    return Like;
  };
