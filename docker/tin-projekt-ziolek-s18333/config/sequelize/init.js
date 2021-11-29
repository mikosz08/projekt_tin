const sequelize = require('./sequelize');

const Character = require('../../model/sequelize/Character');
const Event = require('../../model/sequelize/Event');
const Activiy = require('../../model/sequelize/Activity');

module.exports = () => {

    Character.hasMany(Event, { as: 'events', foreignKey: { name: 'character_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Event.belongsTo(Character, { as: 'character', foreignKey: { name: 'character_id', allowNull: false } });

    Activiy.hasMany(Event, { as: 'events', foreignKey: { name: 'activity_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Event.belongsTo(Activiy, { as: 'activity', foreignKey: { name: 'activity_id', allowNull: false } });

    let allCharacters, allActivities;
    return sequelize
        .sync({ foce: true })
        .then(() => {
            return Character.findAll();
        })
        .then(chars => {

            if (!chars || chars.length == 0) {

                return Character.bulkCreate([
                    { name: 'Mikosz07', char_class: 'Mage', race: 'Orc', aligment: 'Taurens', level: 60 },
                    { name: 'Mikosz17', char_class: 'Mage', race: 'Orc', aligment: 'Taurens', level: 60 },
                    { name: 'Mikosz27', char_class: 'Mage', race: 'Orc', aligment: 'Taurens', level: 60 },
                ])
                    .then(() => {
                        return Character.findAll();
                    });
            } else {
                return chars;
            }

        })
        .then(chars => {

            allCharacters = chars;
            return Activiy.findAll();
        })
        .then(activs => {

            if (!activs || activs.length == 0) {

                return Activiy.bulkCreate([

                    { name: 'Kobolt Cave', experience: 1920 },
                    { name: 'Iron Desert', experience: 420 },

                ])
                    .then(() => {

                        return Character.findAll();

                    });

            } else {
                return activs;
            }

        })
        .then(activs => {

            allActivities = activs;
            return Event.findAll();

        })
        .then(events => {

            if (!events || events.length == 0) {

                return Event.bulkCreate([
                    { activity_id: allActivities[0]._id, character_id: allCharacters[0]._id, eventDate: '2001-01-01', game_master: 'Michael_1' },
                    { activity_id: allActivities[0]._id, character_id: allCharacters[1]._id, eventDate: '2002-02-02', game_master: 'Michael_2' },
                    { activity_id: allActivities[1]._id, character_id: allCharacters[0]._id, eventDate: '2003-03-03', game_master: 'Michael_3' }
                ]);

            } else {
                return events;
            }
        });

};
