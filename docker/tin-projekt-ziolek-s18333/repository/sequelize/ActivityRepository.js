const Character = require('../../model/sequelize/Character');
const Activity = require('../../model/sequelize/Activity');
const Event = require('../../model/sequelize/Event');

exports.getActivity = () => {
    return Activity.findAll();
};

exports.getActivityById = (actId) => {

    return Activity.findByPk(actId,
        {
            include: [{
                model: Event,
                as: 'events',

                include: [{
                    model: Character,
                    as: 'character'
                }]
            }]
        }
    );

};

exports.createActivity = (newActivityData) => {
    console.log(newActivityData.name)
    return Activity.create({
        name: newActivityData.name,
        experience: newActivityData.experience,
    });
}

exports.updateActivity = (actId, actData) => {

    const actName = actData.name;
    const actExp = actData.charClass;

    return Activity.update(actData, { where: { _id: actId } });
}

exports.deleteActivity = (actId) => {
    return Activity.destroy({
        where: { _id: actId }
    });
}