const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');

router.get('/', eventController.showEventList);
router.get('/add', eventController.showAddEvent);
router.get('/details/:eventId', eventController.showEventDetails);
router.get('/edit/:eventId', eventController.showEventEdit);

router.post('/add', eventController.addEvent);
router.post('/edit', eventController.updateEvent);
router.get('/delete/:eventId', eventController.deleteEvent);

module.exports = router;