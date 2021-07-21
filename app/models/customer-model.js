// const { nhatConnect } = require("../models/mysql-connect.js");

// const sql = require("../models/mysql-connect.js").connection;
const sql = require("../models/mysql-connect2.js");

const Customer = function(customer) {
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
};



// await sql.query(`INSERT INTO customers (email, name, active) VALUES (${newCustomer.email}, ${newCustomer.name}, ${newCustomer.active.toString()})`)

Customer.create = async (newCustomer, result) => {
    sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created customer: ", { id: res.insertId, ...newCustomer});
        result(null, { id: res.insertId, ...newCustomer });
    });
};

Customer.create2 = (newCustomer) => new Promise(
    (resolve, reject) => {
    sql.query(`INSERT INTO customers (email, name, active) VALUES ("${newCustomer.email}", "${newCustomer.name}", "${newCustomer.active}")`)
        .then(data => {
            console.log(".then ok");
            resolve({ id: data.insertId, ...newCustomer });
        })
        .catch(err => {
            console.log("Error when create" + err);
            reject(err);
        });

});

Customer.create3 = newCustomer => new Promise(
    async (resolve, reject) => {
        try {
            data = await sql.query(`INSERT INTO customers (email, name, active) VALUES ("${newCustomer.email}", "${newCustomer.name}", "${newCustomer.active}")`);
            resolve({ id: data.insertId, ...newCustomer });
        }
        catch (err){
            reject(err);
        }
    }
)

Customer.findById = (customerId, result) => {
    sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

Customer.getAll = result => {
    sql.connection.query("SELECT * FROM customers", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("customer: ", res);
        result(null, res);
    });
};

Customer.updateById = (id, customer, result) => {
    sql.query(
        "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
        [customer.email, customer.name, customer.active, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if(res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("update customer: ", { id: id, ...customer });
            result(null, { id: id, ...customer });
        }
    );
};

Customer.remove = (id, result) => {
    sql.query("DELETE FROM customer where id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted customer with id: ", id);
        result(null, res);
    });
};

Customer.removeAll = result => {
    sql.query("DELETE FROM customers", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} customers`);
        result(null, res);
    });
};

module.exports = Customer;
