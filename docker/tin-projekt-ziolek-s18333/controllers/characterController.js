
const CharacterRepository = require('../repository/sequelize/CharacterRepository')

exports.showCharacterList = (req, res, next) => {
    CharacterRepository.getCharacters()
        .then(chars => {
            res.render('pages/character/list', {
                chars: chars,
                navLocation: 'char',
                validationErrors: []
            });
        })
}

exports.showAddCharacter = (req, res, next) => {
    res.render('pages/character/form', {
        char: {},
        pageTitle: 'Add Character',
        formMode: 'createNew',
        btnLabel: 'Add Character',
        formAction: 'add',
        navLocation: 'char',
        validationErrors: []
    });
}

exports.showCharacterDetails = (req, res, next) => {
    const charId = req.params.charId
    CharacterRepository.getCharacterById(charId)
        .then(char => {
            res.render('pages/character/form', {
                char: char,
                formMode: 'showDetails',
                pageTitle: 'Character Details',
                formAction: '',
                navLocation: 'char',
                validationErrors: []
            });
        });
}

exports.showCharacterEdit = (req, res, next) => {
    const charId = req.params.charId
    CharacterRepository.getCharacterById(charId)
        .then(char => {
            res.render('pages/character/form', {
                char: char,
                formMode: 'edit',
                pageTitle: 'Edit Character',
                btnLabel: 'Edit Character',
                formAction: '/character/edit',
                navLocation: 'char',
                validationErrors: []
            });
        });
}

exports.addCharacter = (req, res, next) => {
    const charData = { ...req.body };
    CharacterRepository.createCharacter(charData)
        .then(result => {
            res.redirect('/character')
        })
        .catch(err => {
            res.render('pages/character/form', {
                char: charData,
                pageTitle: 'Add Character',
                formMode: 'createNew',
                btnLabel: 'Add Character',
                formAction: '/character/add',
                navLocation: 'char',
                validationErrors: err.errors
            });
        })
}


exports.updateCharacter = (req, res, next) => {
    const charId = req.body._id;
    const charData = { ...req.body };
    CharacterRepository.updateCharacter(charId, charData)
        .then(result => {
            res.redirect('/character')
        }).catch(err => {
            res.render('pages/character/form', {
                char: charData,
                pageTitle: 'Edit Character',
                formMode: 'edit',
                btnLabel: 'Edit Character',
                formAction: '/character/edit',
                navLocation: 'char',
                validationErrors: err.errors
            });
        })
}


exports.deleteCharacter = (req, res, next) => {
    const charId = req.params.charId
    CharacterRepository.deleteCharacter(charId)
        .then(
            () => {
                res.redirect('/character')
            })
}

