const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Character = sequelize.define('Character', {
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

    char_class: {
        type: Sequelize.STRING,
        allowNull: false
    },

    race: {
        type: Sequelize.STRING,
        allowNull: false
    },

    aligment: {
        type: Sequelize.STRING,
        allowNull: true
    },

    level: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});
//TODO: Dodać length do stringów
module.exports = Character;