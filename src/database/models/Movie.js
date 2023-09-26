module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        "Movie",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            title: { type: DataTypes.STRING(500), allowNull: false },
            rating: { type: DataTypes.DECIMAL, allowNull: false },
            awards: { type: DataTypes.INTEGER, allowNull: false },
            release_date: { type: DataTypes.DATE, allowNull: false },
            length: { type: DataTypes.DATE },
            genre_id: { type: DataTypes.DATE },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        },
        { tableName: "movies" }
    );

    return Movie;
};
