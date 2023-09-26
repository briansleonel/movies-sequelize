const db = require("../database/models");

const actorsController = {
    list: (req, res) => {
        db.Actor.findAll()
            .then((actors) => {
                return res.render("actorsList", { actors });
            })
            .catch((err) => console.log(err));
    },
};

module.exports = actorsController;
