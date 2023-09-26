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
            created_at: {
                type: DataTypes.DATE,
            },
            updated_at: {
                type: DataTypes.DATE,
            },
        },
        { tableName: "genres", timestamps: false }
    );

    return Genre;
};
