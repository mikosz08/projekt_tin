const Character = require('../../model/sequelize/Character');
const Activity = require('../../model/sequelize/Activity');
const Event = require('../../model/sequelize/Event');

exports.getCharacters = () => {
    return Character.findAll();
};

exports.getCharacterById = (charId) => {

    return Character.findByPk(charId,
        {
            include: [{
                model: Event,
                as: 'events',

                include: [{
                    model: Activity,
                    as: 'activity'
                }]

            }]
        }
    );

};

exports.createCharacter = (newCharData) => {
    return Character.create({
        name: newCharData.name,
        char_class: newCharData.char_class,
        race: newCharData.race,
        aligment: newCharData.aligment,
        level: newCharData.level
    });

}

exports.updateCharacter = (charId, charData) => {

    const charName = charData.name;
    const charClass = charData.charClass;
    const charRace = charData.charRace;
    const charAligment = charData.charAligment;
    const charLevel = charData.charLevel;

    return Character.update(charData, { where: { _id: charId } });
}

exports.deleteCharacter = (charID) => {
    return Character.destroy({
        where: { _id: charID }
    });
}

//stad idziemy do CharacterAPI