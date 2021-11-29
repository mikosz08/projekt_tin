const Squelize = require('sequelize');

const squelize = new Squelize('tin-s18333-sequelize', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = squelize;