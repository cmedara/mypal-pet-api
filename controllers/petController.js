
var petController = function (Pet) {

    var getAll = function (req, res) {
        Pet.find(function (err, pets) {
            if (err)
                res.status(500).send(err);
            else
                res.json(pets);
        });
    };

    var post = function (req, res) {

        var pet = new Pet(req.body);
        pet.save(function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).json(pet);
            }
        });
    };

    var get = function (req, res, next) {
        Pet.findById(req.params.id, function (err, pet) {
            if (err) {
                res.status(500).send(err);
            }
            else if (pet) {
                req.pet = pet;
                next();
            }
            else {
                res.status(404).send('no book found');
            }
        });
    };

    var put = function (req, res) {
            req.pet.Breed = req.body.Breed;
            req.pet.Age = req.body.Age;
            req.pet.Name = req.body.Name;
            req.pet.Price = req.body.Price;
            req.pet.ListDate = req.body.ListDate;
            req.pet.SaleDate = req.body.SaleDate;
            req.pet.save(function (err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.pet);
                }
            });
        };

    var del = function (req, res) {
            req.pet.remove(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            });
        };
    return {
        getAll: getAll,
        post: post,
        get: get,
        put: put,
        delete: del
    }
};

module.exports = petController;