const db = require("../database/models");

const actorsController = {
    list: (req, res) => {
        db.Actor.findAll()
            .then((actors) => {
                return res.render("actorsList", { actors });
            })
            .catch((err) => console.log(err));
    },
    detail: (req, res) => {
        const { id } = req.params;

        db.Actor.findByPk(id)
            .then((actor) => {
                return res.render("actorsDetail", { actor });
            })
            .catch((err) => console.log(err));
    },
};

module.exports = actorsController;
