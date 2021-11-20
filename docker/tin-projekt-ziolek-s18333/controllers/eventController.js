
exports.showEventList = (req, res, next) => {
    res.render('pages/event/list', { navLocation: 'event' });
}

exports.showAddEvent = (req, res, next) => {
    res.render('pages/event/form', { navLocation: 'event' });
}

exports.showEventDetails = (req, res, next) => {
    res.render('pages/event/form-details', { navLocation: 'event' });
}

exports.showEventEdit = (req, res, next) => {
    res.render('pages/event/form-edit', { navLocation: 'event' });
}