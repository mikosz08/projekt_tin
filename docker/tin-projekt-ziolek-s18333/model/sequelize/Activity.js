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

    experience: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field required"
            },
            isNotInRange() {
                if (this.experience < 0) {
                    throw new Error('Exp is negative!');
                }
                if (!this.experience) {
                    throw new Error('Wrong Format!');
                }
                if (isNaN(this.experience)) {
                    throw new Error('Wrong Format!!');
                }
            },
        }
    }
});

module.exports = Activity;