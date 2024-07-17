const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profil = sequelize.define('Profil', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Profils', // Nom de la table si différent du modèle
    timestamps: false // Si vous n'avez pas de champs createdAt et updatedAt
});

module.exports = Profil;
