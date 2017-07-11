var express = require('express');

var routes = function (Pet) {

    var petRouter = express.Router();
    var petController = require('../controllers/petController')(Pet);

    petRouter.route('/pets')
        .get(petController.getAll);
    petRouter.route('/pet')
        .post(petController.post);
    /**
     * middleware for all the pet requests with id specified
     */
    petRouter.use('/pet/:id', petController.get);

    petRouter.route('/pet/:id')
        .get(function (req, res) {
            res.json(req.pet);
        })
        .put(petController.put)
        .delete(petController.delete);
    return petRouter;
};

module.exports = routes;