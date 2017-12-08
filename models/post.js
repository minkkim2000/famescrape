module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    like: {
      type: DataTypes.STRING,
    },
    dislike: {
      type: DataTypes.STRING,
    },
    whoThat: {
      type: DataTypes.STRING,
    }
  });
  return Post;
};
