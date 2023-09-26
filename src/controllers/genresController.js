const db = require("../database/models");

const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then((genres) => {
                return res.render("genresList", { genres });
            })
            .catch((err) => console.log(err));
    },
};

module.exports = genresController;