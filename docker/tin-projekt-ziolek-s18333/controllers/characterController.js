
exports.showActivityList = (req, res, next) => {
    res.render('pages/character/list', { navLocation: 'char' });
}

exports.showAddActivity = (req, res, next) => {
    res.render('pages/character/form', { navLocation: 'char' });
}

exports.showActivityDetails = (req, res, next) => {
    res.render('pages/character/form-details', { navLocation: 'char' });
}

exports.showActivityEdit = (req, res, next) => {
    res.render('pages/character/form-edit', { navLocation: 'char' });
}