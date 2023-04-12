const { Sequelize } = require('sequelize');

const  sequelize  = require('../models/model');


async function getComments () {
    var comentarios_ofensivos = await sequelize.OffensivesComments.findAll();
    console.log(comentarios_ofensivos[0].id);
    console.log(comentarios_ofensivos[0].keywords);
    var json = {"po":"pipoca"};
    return JSON.stringify(json);
}

module.exports.getComments = getComments;