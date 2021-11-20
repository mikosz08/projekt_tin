const express = require('express');
const router = express.Router();

const characterController = require('../controllers/characterController');

router.get('/', characterController.showActivityList);

router.get('/add', characterController.showAddActivity);

router.get('/details', characterController.showActivityDetails);
//jak zrobić route na /details/:charId ????

router.get('/edit', characterController.showActivityEdit);

module.exports = router;