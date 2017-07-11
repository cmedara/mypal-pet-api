var express = require('express');

var routes = function (Pet) {
    var petRouter = express.Router();
    petRouter.route('/pets')
        .get(function (req, res) {
            Pet.find(function (err, pets) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(pets);
            });
        });
    petRouter.route('/pet')
        .post(function (req, res) {
            var pet = new Pet(req.body);
            pet.save();
            res.status(201).send(pet);
        });
    petRouter.route('/pet/:id')
        .get(function (req, res) {
            Pet.findById(req.params.id, function (err, pet) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(pet);
            });
        });
    return petRouter;
};

module.exports = routes;