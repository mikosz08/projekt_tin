const Character = require('../../model/sequelize/Character');
const Activity = require('../../model/sequelize/Activity');
const Event = require('../../model/sequelize/Event');

exports.getEvents = () => {
    return Event.findAll({
        include: [{
            model: Character,
            as: 'character'
        },
        {
            model: Activity,
            as: 'activity'
        }]

    });
};

exports.getEventById = (eventId) => {
    return Event.findByPk(eventId, {
        include: [{
            model: Character,
            as: 'character'
        },
        {
            model: Activity,
            as: 'activity'
        }]
    });
};

exports.createEvent = (newEventData) => {

    console.log(JSON.stringify(newEventData));

    return Event.create({
        activity_id: newEventData.activity_id,
        character_id: newEventData.character_id,
        eventDate: newEventData.eventDate,
        game_master: newEventData.game_master
    });
}

exports.updateEvent = (eventId, eventData) => {
    return Event.update(eventData, { where: { _id: eventId } });
}

exports.deleteEvent = (eventId) => {
    return Event.destroy({
        where: { _id: eventId }
    });
}

exports.deleteManyEvents = (eventIds) => {
    return Event.find({ _id: { [Sequelize.Op.in]: eventIds } });
}