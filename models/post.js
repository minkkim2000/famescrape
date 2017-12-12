module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    like: {
      type: DataTypes.INT,
    },
    dislike: {
      type: DataTypes.INT,
    },
    whoThat: {
      type: DataTypes.INT,
    }
  });
  return Post;
};
