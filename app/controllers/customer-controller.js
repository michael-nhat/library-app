const Customer = require("../models/customer-model.js");

exports.create = (req, res)=>{
    if (!req.body){
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    Customer.create(customer, (err, data)=>{
        if(err)
            res.status(500).send({
                message:
                err.message || "Some error while creating Customer"
            });
        else res.send(data);
    });
};

exports.create2 = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    Customer.create3(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error while creating Customer"
            });
        });
};

exports.findAll = (req, res) => {

    Customer.getAll((err, data)=>{
        if (err)
            res.status(500).send({
                message:
                err.message || " Some error occured while retreiviing customers"
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data)=>{
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.customerId}`
                });
            } else{
                res.status(500).send({
                    message: "Error retreving Customer with id "+ req.params.customerId
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    Customer.updateById(
        req.params.customerId,
        new Customer(req.body),
            (err,data) =>{
                if(err){
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Customer with id ${req.params.customerId}`
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Customer with id " + req.params.customerId
                        });
                    }
                } else res.send(data);
            }
    );
};

exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data)=> {
        if(err){
            if(err.kind == "not_found"){
                res.status(404).send({
                    message: "Not found Customer with id ${req.params.customerId}"
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Customer with id " + req.params.customerId
                });
            }
        } else res.send({message: "Customer was deleted successfully!"});
    });
};

exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while removing all customers"
            });
        else res.send({ message: "All Customers were deleted successfully!"});
    });
};
