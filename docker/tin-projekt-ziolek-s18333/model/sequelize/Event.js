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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
        }
    },

    character_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
        }
    },

    eventDate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            notNull: {
                msg: "Field required"
            },
            isNotFuture() {
                if (this.eventDate > Date.now()) {
                    throw new Error('This is from the future');
                }
            },
            isDate: {
                msg: "Field must be acctual date"
            }
        }
    },

    game_master: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            len: {
                args: [2, 30],
                msg: "Required 2-30 characters"
            },
        }
    }
});

module.exports = Event;