const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Activity = sequelize.define('Activity', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    experience: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

module.exports = Activity;