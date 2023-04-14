const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const OffensivesComments = require('./comentariosOffensivos');

const comentariosOffensivos = OffensivesComments(sequelize, Sequelize.DataTypes);

const db = {
    comentariosOffensivos,
    sequelize,
}

module.exports = db;
