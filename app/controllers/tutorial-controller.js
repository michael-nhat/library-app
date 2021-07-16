const Tutorial = require('../models/tutorial-model.js');
const mongooseToObj = require('../../util/mongoose.js');

class TutorialController {
    create(req, res) {
        if (!req.body.title) {
            res.status(400).send({ message: "Content cannot be empty!" });
            return;
        }

        const tutorial = new Tutorial({
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published :false
        });

        tutorial
            .save(tutorial)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred creating Tutorial"
                });
            });
    };

    findAll = (req, res) => {
        const title = req.query.title;
        var condition = title ? {title: { $regex: new RegExp(title), $option: "i" } } : {};

        Tutorial.find(condition)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error while getting tutorial."
                });
            });
    }

    findOne = (req, res) => {
        const id = req.params.id;

        Tutorial.findById(id)
            .then(data => {
                if (!data)
                    res.status(404).send({ message: "Not fond Tutorial with id = " + id });
                else res.send(data);
            })
            .catch(err => {
                res.status(500).send({ message: "Error getting Tutorial with Id = " + id });
            });
    }

    update = (req, res) => {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update cannot be empty!"
            });
        }

        const id = req.params.id;

        Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: "Cannot update Tutorial with id = "+id+" might be it not found!"
                    });
                } else res.send({ message: "Update tutorial successfully!"});
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Tutorial with id = " + id
                });
            });
    }

    delete = (req, res) => {
        const id = req.params.id;

        Tutorial.findByIdAndRemove(id)
            .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Maybe Tutorial don't exist, cannot delete with id = " + id
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Tutorial with id = " + id
                });
            });
    }

    deleteAll = (req, res) => {
        Tutorial.deleteMany({})
            .then(data => {
                res.send({
                    message: data.deleteedCount + "Tutorial deleted!"
                });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occured while delete all Tutorial!"
                });
            });
    }

    findAllPublished = (req, res) => {
        Tutorial.find({ published: true })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error while getting published tutorials."
                });
            });
    }

}

module.exports = new TutorialController();
