const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Profil = require('./profil')(sequelize, Sequelize);

module.exports = db;
