const express = require('express');
const router = express.Router();

const charApiController = require('./CharacterAPI');

router.get('/', charApiController.getCharacters);
router.get('/:charId', charApiController.getCharacterById);
router.post('/', charApiController.createCharacter);
router.put('/:charId', charApiController.updateCharacter);
router.delete('/:charId', charApiController.deleteCharacter);

module.exports = router;