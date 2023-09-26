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
};

module.exports = moviesController;
