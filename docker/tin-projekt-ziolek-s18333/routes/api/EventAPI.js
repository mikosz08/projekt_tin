const EventRepository = require('../../repository/sequelize/EventRepository');

exports.getEvents = (req, res, next) => {
    EventRepository.getEvents()
        .then(events => {
            res.status(200).json(events);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEventById = (req, res, next) => {
    const eventId = req.params.eventId; 
    EventRepository.getEventById(eventId)
    .then(char => {

        if (!char) {
            res.status(404).json({
                message: 'Event with id: ' + eventId + 'not found'
            })
        } else {
            res.status(200).json(char);
        }

    });
};

exports.createEvent = (req, res, next) => {
    EventRepository.createEvent(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateEvent = (req, res, next) => {
    const eventId = req.params.eventId;
    EventRepository.updateEvent(eventId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Event updated!', event: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteEvent = (req, res, next) => {
    const eventId = req.params.eventId;
    EventRepository.deleteEvent(eventId)
        .then(result => {
            res.status(200).json({ message: 'Removed event', event: result })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};