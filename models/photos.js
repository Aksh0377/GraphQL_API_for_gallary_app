'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define('Photos', {
    url: DataTypes.STRING,
  }, {});
  Photos.associate = function(models) {
    // associations can be defined here
    Photos.belongsTo(models.User, { foreignKey: 'userId' })

  };
  return Photos;
};