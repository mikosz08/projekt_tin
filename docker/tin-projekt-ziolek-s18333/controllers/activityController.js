const ActivityRepository = require('../repository/sequelize/ActivityRepository')

exports.showActivityList = (req, res, next) => {
    ActivityRepository.getActivity()
        .then(activs => {
            res.render('pages/activity/list', {
                activs: activs,
                navLocation: 'activ'
            });
        })
}

exports.showAddActivity = (req, res, next) => {
    res.render('pages/activity/form', {
        activ: {},
        pageTitle: 'Add Activity',
        formMode: 'createNew',
        btnLabel: 'Add Activity',
        formAction: 'add',
        navLocation: 'activ'
    });
}

exports.showActivityDetails = (req, res, next) => {
    const actId = req.params.actId
    ActivityRepository.getActivityById(actId)
        .then(activ => {
            res.render('pages/activity/form', {
                activ: activ,
                formMode: 'showDetails',
                pageTitle: 'Activity Details',
                formAction: '',
                navLocation: 'activ'
            });
        });
}

exports.showActivityEdit = (req, res, next) => {
    const actId = req.params.actId
    ActivityRepository.getActivityById(actId)
        .then(activ => {
            res.render('pages/activity/form', {
                activ: activ,
                formMode: 'edit',
                pageTitle: 'Edit Activity',
                btnLabel: 'Edit Activity',
                formAction: '/activity/edit',
                navLocation: 'activ'
            });
        });

}

exports.addActivity = (req, res, next) => {
    const actData = { ...req.body };
    console.log(actData)
    ActivityRepository.createActivity(actData)
        .then(result => {
            res.redirect('/activity')
        });
}


exports.updateCharacter = (req, res, next) => {
    const actId = req.body._id;
    const actData = { ...req.body };
    ActivityRepository.updateActivity(actId, actData)
        .then(result => {
            res.redirect('/activity')
        })
}


exports.deleteCharacter = (req, res, next) => {
    const actId = req.params.actId
    ActivityRepository.deleteActivity(actId)
        .then(
            () => {
                res.redirect('/activity')
            }
        )
}