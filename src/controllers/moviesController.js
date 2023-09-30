const db = require("../database/models");
const moment = require("moment");

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

        db.Movie.create({ title, rating, awards, release_date, length }).then(
            (state) => {
                return res.redirect("/movies");
            }
        );
    },
    edit: function (req, res) {
        const { id } = req.params;

        db.Movie.findByPk(id)
            .then((movie) => {
                return res.render("moviesEdit", { movie, moment });
            })
            .catch((err) => console.log(err));
    },
    update: function (req, res) {
        const { title, rating, awards, release_date, length } = req.body;
        const { id } = req.params;

        db.Movie.update(
            {
                title,
                rating,
                awards,
                release_date,
                length,
            },
            {
                where: {
                    id,
                },
            }
        ).then((state) => {
            return res.redirect("/movies");
        });
    },
    delete: function (req, res) {
        const { id } = req.params;

        db.Movie.findByPk(id)
            .then((movie) => {
                return res.render("moviesDelete", { movie });
            })
            .catch((err) => console.log(err));
    },
    destroy: function (req, res) {
        const { id } = req.params;

        db.Movie.destroy({ where: { id } }).then((state) => {
            return res.redirect("/movies");
        });
    },
};

module.exports = moviesController;
