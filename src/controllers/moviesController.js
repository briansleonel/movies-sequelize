const { Op } = require("sequelize");
const db = require("../database/models");

const moviesController = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
                return res.render("moviesList", { movies });
            })
            .catch((err) => console.log(err));
    },
    detail: (req, res) => {
        const { id } = req.params;

        db.Movie.findByPk(id)
            .then((movie) => {
                return res.render("moviesDetail", { movie });
            })
            .catch((err) => console.log(err));
    },
    new: (req, res) => {
        db.Movie.findAll({ order: [["release_date", "DESC"]] })
            .then((movies) => {
                return res.render("newestMovies", { movies });
            })
            .catch((err) => console.log(err));
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            /*
            where: {
                rating: { [Op.gte]: 7 },
            },*/
            order: [["rating", "DESC"]],
            limit: 5,
        })
            .then((movies) => {
                return res.render("recommendedMovies", { movies });
            })
            .catch((err) => console.log(err));
    },
    //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        res.render("moviesAdd");
    },
    create: function (req, res) {
        const { title, rating, awards, release_date, length } = req.body;

        db.Movie.create({ title, rating, awards, release_date, length });

        res.redirect("/movies");
    },
    edit: function (req, res) {
        const { id } = req.params;

        db.Movie.findByPk(id)
            .then((movie) => {
                return res.render("moviesEdit", { movie });
            })
            .catch((err) => console.log(err));
    },
    update: async function (req, res) {
        const { title, rating, awards, release_date, length } = req.body;
        const { id } = req.params;

        const movieFound = await db.Movie.findByPk(id);

        db.Movie.update(
            {
                title,
                rating,
                awards,
                release_date: release_date
                    ? release_date
                    : movieFound.release_date,
                length,
            },
            {
                where: {
                    id,
                },
            }
        );

        res.redirect("/movies");
    },
    delete: function (req, res) {
        // TODO
    },
    destroy: function (req, res) {
        // TODO
    },
};

module.exports = moviesController;
