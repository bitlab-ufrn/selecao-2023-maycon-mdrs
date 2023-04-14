const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const OffensivesComments = require('./comentarios');

const comentarios = OffensivesComments(sequelize, Sequelize.DataTypes);

const db = {
    comentarios,
    sequelize,
}

module.exports = db;
