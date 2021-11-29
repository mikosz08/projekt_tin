const CharacterRepository = require('../../repository/sequelize/CharacterRepository');

exports.getCharacters = (req, res, next) => {
    CharacterRepository.getCharacters()
        .then(chars => {
            res.status(200).json(chars);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCharacterById = (req, res, next) => {
    const charId = req.params.charId; 
    CharacterRepository.getCharacterById(charId)
    .then(char => {

        if (!char) {
            res.status(404).json({
                message: 'Character with id: ' + charId + 'not found'
            })
        } else {
            res.status(200).json(char);
        }

    });
};

exports.createCharacter = (req, res, next) => {
    CharacterRepository.createCharacter(req.body)
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

exports.updateCharacter = (req, res, next) => {
    const charId = req.params.charId;
    CharacterRepository.updateCharacter(charId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Character updated!', char: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteCharacter = (req, res, next) => {
    const charId = req.params.charId;
    CharacterRepository.deleteCharacter(charId)
        .then(result => {
            res.status(200).json({ message: 'Removed character', char: result })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};