const { Model, DataTypes } = require('sequelize');
const Content = require('./content');

module.exports = (sequelize) => {
  class Episode extends Model {}

  Episode.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    numeroEpisode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titreEpisode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duree: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contentId: {
      type: DataTypes.INTEGER,
      references: {
        model: Content,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Episode'
  });

  return Episode;
};
