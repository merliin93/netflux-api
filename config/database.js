const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('netfluxx', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
