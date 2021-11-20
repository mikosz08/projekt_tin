const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');

router.get('/', eventController.showEventList);

router.get('/add', eventController.showAddEvent);

router.get('/details', eventController.showEventDetails);
//jak zrobić route na /details/:charId ????

router.get('/edit', eventController.showEventEdit);

module.exports = router;