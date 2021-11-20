const express = require('express');
const router = express.Router();

const activityController = require('../controllers/activityController');

router.get('/', activityController.showActivityList);

router.get('/add', activityController.showAddActivity);

router.get('/details', activityController.showActivityDetails);

router.get('/edit', activityController.showActivityEdit);

module.exports = router;