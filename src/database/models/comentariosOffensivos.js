const comentariosOffensivos = (sequelize, DataTypes) => {
    // offensives_comments -> nome no sqlite
    const OffensivesComments = sequelize.define('offensives_comments', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        keywords: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    },{
        sequelize,
        modelName: 'OffensivesComments',
        createdAt: false,
        updatedAt: false
    }); 

    return OffensivesComments
};

module.exports = comentariosOffensivos;
