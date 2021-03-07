const HotDogsValidator = require('./validators/HotDogValidator')
const db = require("../models/sequalize")
const HotDogs = db.hotdogs;

exports.create = (req, res) => {
    let validationResult = HotDogsValidator.validate({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    }, {abortEarly: false});

    if (validationResult.error) {
        let validationErrorItems = validationResult.error.details;
        let jsonResponse = {errors: {}};
        validationErrorItems.forEach(function (item) {
            jsonResponse.errors[item.path[0]] = item.message;
        });
        res.status(400).json(jsonResponse);
        return;
    }

    const hotDog = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    };
    if (req.body.imageLink) {
        hotDog.imageLink = req.body.imageLink;
    }
    HotDogs.create(hotDog)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findAll = (req, res) => {
    HotDogs.findAll().then(data => {
        res.send(data);
    });

};

exports.isNameExists = (req, res) => {
    HotDogs.findOne({where: {name: req.body.name}})
        .then(data => {
            res.json({'isNameExists': data !== null})
        })
}

exports.update = (req, res) => {
    if (!req.params.id) {
        res.send(400).json({'error': 'id is required.'});
        return;
    }
    HotDogs.update({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageLink: req.body.imageLink,
    }, {
        returning: true, where: {id: req.params.id}
    })
        .then(function ([rowsUpdate, [updatedHotDog]]) {
            res.json(updatedHotDog)
        })
    }

exports.remove = (req, res) => {
    HotDogs.destroy({where: {id: req.params.id}})
        .then(data => res.json({removed: true}))

};
