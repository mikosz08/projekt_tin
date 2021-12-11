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
        .sync({ force: true })
        .then(() => {
            return Character.findAll();
        })
        .then(chars => {

            if (!chars || chars.length == 0) {

                return Character.bulkCreate([
                    { name: 'Supra', char_class: 'Paladin', race: 'Elf', aligment: 'Horde', level: 16 },
                    { name: 'Tobi', char_class: 'Rogue', race: 'Gnome', aligment: 'Aliance', level: 7 },
                    { name: 'Mikosz', char_class: 'Mage', race: 'Orc', aligment: 'Horde', level: 13 },
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

                    { name: 'Kobolt Cave', experience: 4200 },
                    { name: 'Iron Desert', experience: 570 },

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
                    { activity_id: allActivities[0]._id, character_id: allCharacters[0]._id, eventDate: '1111-01-01', game_master: 'Michael' },
                    { activity_id: allActivities[0]._id, character_id: allCharacters[1]._id, eventDate: '2222-02-02', game_master: 'Tobiasz' },
                    { activity_id: allActivities[1]._id, character_id: allCharacters[0]._id, eventDate: '3333-03-03', game_master: 'Patrycy' },
                    { activity_id: allActivities[1]._id, character_id: allCharacters[0]._id, eventDate: '4444-04-04', game_master: 'Patrycy' }
                ]);

            } else {
                return events;
            }
        });

};
