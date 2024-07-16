module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
      titre: DataTypes.STRING,
      categorie: DataTypes.STRING,
      video: DataTypes.STRING,
      langue: DataTypes.STRING,
  });

  Content.associate = (models) => {
      Content.hasMany(models.Episode, { foreignKey: 'contentId' });
      Content.hasMany(models.Saison, { foreignKey: 'contentId' });
  };

  return Content;
};
