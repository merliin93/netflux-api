const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Content extends Model {}

  Content.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categorie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false
    },
    langue: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Content'
  });

  return Content;
};
