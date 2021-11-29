const ActivityRepository = require('../../repository/sequelize/ActivityRepository');

exports.getActivity = (req, res, next) => {
    ActivityRepository.getActivity()
        .then(acts => {
            res.status(200).json(acts);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getActivityById = (req, res, next) => {
    const actId = req.params.actId; 
    ActivityRepository.getActivityById(actId)
    .then(activity => {

        if (!activity) {
            res.status(404).json({
                message: 'Activity with id: ' + actId + 'not found'
            })
        } else {
            res.status(200).json(activity);
        }

    });
};

exports.createActivity = (req, res, next) => {
    ActivityRepository.createActivity(req.body)
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

exports.updateActivity = (req, res, next) => {
    const actId = req.params.actId;
    ActivityRepository.updateActivity(actId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Activity updated!', act: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteActivity = (req, res, next) => {
    const actId = req.params.actId;
    ActivityRepository.deleteActivity(actId)
        .then(result => {
            res.status(200).json({ message: 'Removed activity', act: result })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};