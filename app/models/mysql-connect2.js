const mysql = require("mysql");
const sqlConfig = require("../config/sql-config.js");

const connection = mysql.createConnection({
    host: sqlConfig.HOST,
    user: sqlConfig.USER,
    password: sqlConfig.PASSWORD,
    database: sqlConfig.DB
});

const query = (queryString) => new Promise(
    (resolve, reject) => {
        connection.query(queryString, (err, data) => {
            if (err) {
                console.log("Error when query");
                reject(err);
            }
            resolve(data);
        });
    });

module.exports = {connection , query};
