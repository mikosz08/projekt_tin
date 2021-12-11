const CharacterRepository = require('../repository/sequelize/CharacterRepository')
const ActivityRepository = require('../repository/sequelize/ActivityRepository')
const EventRepository = require('../repository/sequelize/EventRepository')

exports.showEventList = (req, res, next) => {
    EventRepository.getEvents()
        .then(events => {
            res.render('pages/event/list', {
                events: events,
                navLocation: 'event'
            });
        })
}

exports.showAddEvent = (req, res, next) => {
    let allChars, allActivs;
    CharacterRepository.getCharacters()
        .then(chars => {
            allChars = chars;
            return ActivityRepository.getActivity();
        })
        .then(activs => {
            allActivs = activs;
            res.render('pages/event/form', {
                event: {},
                formMode: 'createNew',
                allChars: allChars,
                allActivs: allActivs,
                pageTitle: 'New Event',
                btnLabel: 'Add new Event',
                formAction: '/event/add',
                navLocation: 'event'
            });
        });
}

exports.showEventDetails = (req, res, next) => {
    const eventId = req.params.eventId
    EventRepository.getEventById(eventId)
        .then(event => {
            res.render('pages/event/form', {
                event: event,
                formMode: 'showDetails',
                pageTitle: 'Event Details',
                formAction: '',
                navLocation: 'event'
            });
        });
}

exports.showEventEdit = (req, res, next) => {
    const eventId = req.params.eventId
    EventRepository.getEventById(eventId)
        .then(event => {
            res.render('pages/event/form', {
                event: event,
                formMode: 'edit',
                pageTitle: 'Edit Event',
                btnLabel: 'Edit Event',
                formAction: '/event/edit',
                navLocation: 'event'
            });
        });
}


exports.addEvent = (req, res, next) => {
    const eventData = { ...req.body };
    EventRepository.createEvent(eventData)
        .then(result => {
            res.redirect('/event')
        });
}


exports.updateEvent = (req, res, next) => {
    const eventId = req.body._id;
    const eventData = { ...req.body };
    EventRepository.updateEvent(eventId, eventData)
        .then(result => {
            res.redirect('/event')
        })
}


exports.deleteEvent = (req, res, next) => {
    const eventId = req.params.eventId
    EventRepository.deleteEvent(eventId)
        .then(
            () => {
                res.redirect('/event')
            }
        )
}