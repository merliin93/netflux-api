module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define('Episode', {
      numeroEpisode: DataTypes.INTEGER,
      titreEpisode: DataTypes.STRING,
      duree: DataTypes.INTEGER,
  });

  Episode.associate = (models) => {
      Episode.belongsTo(models.Content, { foreignKey: 'contentId' });
      Episode.belongsTo(models.Saison, { foreignKey: 'saisonId' });
  };

  return Episode;
};
