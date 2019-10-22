module.exports = function(sequelize, DataTypes) {

  var ContactMe = sequelize.define('ContactMe', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  return ContactMe;
};