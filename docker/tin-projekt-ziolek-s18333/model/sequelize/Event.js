const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Event = sequelize.define('Event', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    activity_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    character_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    eventDate: {
        type: Sequelize.DATE,
        allowNull: false
    },

    game_master: {
        type: Sequelize.STRING(),
        allowNull: true
    }
});

module.exports = Event;