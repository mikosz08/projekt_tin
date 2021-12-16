const CharacterRepository = require('../repository/sequelize/CharacterRepository')
const ActivityRepository = require('../repository/sequelize/ActivityRepository')
const EventRepository = require('../repository/sequelize/EventRepository')

exports.showEventList = (req, res, next) => {
    EventRepository.getEvents()
        .then(events => {
            res.render('pages/event/list', {
                events: events,
                navLocation: 'event',
                validationErrors: []
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
                pageTitle: 'Add Event',
                btnLabel: 'Add Event',
                formAction: '/event/add',
                navLocation: 'event',
                validationErrors: []
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
                navLocation: 'event',
                validationErrors: []
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
                navLocation: 'event',
                validationErrors: []
            });
        });
}


exports.addEvent = (req, res, next) => {
    const eventData = { ...req.body };
    EventRepository.createEvent(eventData)
        .then(result => {

            res.redirect('/event')
        }).catch(err => {
            let allChars = [], allActivs = [];
            CharacterRepository.getCharacters()
                .then(chars => {
                    allChars = chars;
                    return ActivityRepository.getActivity();
                })
                .then(activs => {
                    allActivs = activs;
                    res.render('pages/event/form', {
                        event: eventData,
                        allChars: allChars,
                        allActivs: allActivs,
                        pageTitle: 'Add Event',
                        formMode: 'createNew',
                        btnLabel: 'Add Event',
                        formAction: '/event/add',
                        navLocation: 'event',
                        validationErrors: err.errors
                    });
                });
        })
}


exports.updateEvent = (req, res, next) => {
    const eventId = req.body._id;
    const eventData = { ...req.body };
    EventRepository.updateEvent(eventId, eventData)
        .then(result => {
            res.redirect('/event')
        }).catch(err => {
            res.render('pages/event/form', {
                event: eventData,
                pageTitle: 'Edit Event',
                formMode: 'edit',
                btnLabel: 'Edit Event',
                formAction: '/event/edit',
                navLocation: 'event',
                validationErrors: err.errors
            });
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