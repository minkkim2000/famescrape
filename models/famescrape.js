module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define("Actor", {
    name: DataTypes.STRING,
    valid: DataTypes.BOOLEAN
  });
  return Actor;
};
