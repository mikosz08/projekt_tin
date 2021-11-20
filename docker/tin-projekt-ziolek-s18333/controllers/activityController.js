
exports.showActivityList = (req, res, next) => {
    res.render('pages/activity/list', { navLocation: 'activ' });
}

exports.showAddActivity = (req, res, next) => {
    res.render('pages/activity/form', { navLocation: 'activ' });
}

exports.showActivityDetails = (req, res, next) => {
    res.render('pages/activity/form-details', { navLocation: 'activ' });
}

exports.showActivityEdit = (req, res, next) => {
    res.render('pages/activity/form-edit', { navLocation: 'activ' });
}