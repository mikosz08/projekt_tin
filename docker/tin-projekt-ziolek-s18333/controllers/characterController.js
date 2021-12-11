
const CharacterRepository = require('../repository/sequelize/CharacterRepository')

exports.showCharacterList = (req, res, next) => {
    CharacterRepository.getCharacters()
        .then(chars => {
            res.render('pages/character/list', {
                chars: chars,
                navLocation: 'char'
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
        navLocation: 'char'
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
                navLocation: 'char'
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
                navLocation: 'char'
            });
        });
}

exports.addCharacter = (req, res, next) => {
    const charData = { ...req.body };
    CharacterRepository.createCharacter(charData)
        .then(result => {
            res.redirect('/character')
        });
}


exports.updateCharacter = (req, res, next) => {
    const charId = req.body._id;
    const charData = { ...req.body };
    CharacterRepository.updateCharacter(charId, charData)
        .then(result => {
            res.redirect('/character')
        })
}


exports.deleteCharacter = (req, res, next) => {
    const charId = req.params.charId
    CharacterRepository.deleteCharacter(charId)
        .then(
            () => {
                res.redirect('/character')
            }
        )
}

