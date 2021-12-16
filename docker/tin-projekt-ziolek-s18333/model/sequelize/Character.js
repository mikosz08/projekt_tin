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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [2, 30],
                msg: "Required 2-30 characters"
            },
        }
    },

    char_class: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [2, 30],
                msg: "Required 2-30 characters"
            },
        }
    },

    race: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [2, 30],
                msg: "Required 2-30 characters"
            },
        }
    },

    aligment: {
        type: Sequelize.STRING,
        allowNull: true
    },

    level: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            isNotInRange() {
                if (this.level > 20 || this.level < 1) {
                    throw new Error('Level range: 1-20');
                }
            },
        }
    }
});

module.exports = Character;