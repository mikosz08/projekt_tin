const express = require('express');
const router = express.Router();

const characterController = require('../controllers/characterController');
// const { route } = require('./activityRoute');

router.get('/', characterController.showCharacterList);
router.get('/add', characterController.showAddCharacter);
router.get('/details/:charId', characterController.showCharacterDetails);
router.get('/edit/:charId', characterController.showCharacterEdit);

router.post('/add', characterController.addCharacter)
router.post('/edit', characterController.updateCharacter)
router.get('/delete/:charId', characterController.deleteCharacter);

module.exports = router;