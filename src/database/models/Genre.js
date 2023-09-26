module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define(
        "Genre",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: { type: DataTypes.STRING(100), allowNull: false },
            ranking: { type: DataTypes.INTEGER, allowNull: false },
            active: { type: DataTypes.TINYINT(1), allowNull: false },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        },
        { tableName: "genres" }
    );

    return Genre;
};
