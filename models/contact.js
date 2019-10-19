module.exports = function(sequelize, DataTypes) {

  var ContactMe = sequelize.define('ContactMe', {

    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });

  return ContactMe;
};