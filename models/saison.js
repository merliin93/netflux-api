module.exports = (sequelize, DataTypes) => {
  const Saison = sequelize.define('Saison', {
      numeroSaison: DataTypes.INTEGER,
  });

  Saison.associate = (models) => {
      Saison.belongsTo(models.Content, { foreignKey: 'contentId' });
      Saison.hasMany(models.Episode, { foreignKey: 'saisonId' });
  };

  return Saison;
};
