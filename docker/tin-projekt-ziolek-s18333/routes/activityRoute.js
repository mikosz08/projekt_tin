const express = require('express');
const router = express.Router();

const activityController = require('../controllers/activityController');

router.get('/', activityController.showActivityList);
router.get('/add', activityController.showAddActivity);
router.get('/details/:actId', activityController.showActivityDetails);
router.get('/edit/:actId', activityController.showActivityEdit);

router.post('/add', activityController.addActivity)
router.post('/edit', activityController.updateCharacter)
router.get('/delete/:actId', activityController.deleteCharacter);

module.exports = router;