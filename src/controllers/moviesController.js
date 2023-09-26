const db = require("../database/models");

const moviesController = {
    list: (req, res) => {
        db.Movie.findAll().then((movies) => {
            return res.render("moviesList", { movies });
        });
    },
};

module.exports = moviesController;
