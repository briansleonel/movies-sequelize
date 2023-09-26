const db = require("../database/models");

const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then((genres) => {
                return res.render("genresList", { genres });
            })
            .catch((err) => console.log(err));
    },
    detail: (req, res) => {
        const { id } = req.params;

        db.Genre.findByPk(id)
            .then((genre) => {
                return res.render("genresDetail", { genre });
            })
            .catch((err) => console.log(err));
    },
};

module.exports = genresController;
