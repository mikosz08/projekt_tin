const express = require('express');
const router = express.Router();

const activityApiController = require('./ActivityAPI');

router.get('/', activityApiController.getActivity);
router.get('/:actId', activityApiController.getActivityById);
router.post('/', activityApiController.createActivity);
router.put('/:actId', activityApiController.updateActivity);
router.delete('/:actId', activityApiController.deleteActivity);

module.exports = router;