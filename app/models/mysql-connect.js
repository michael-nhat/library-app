const mysql = require("mysql");
const sqlConfig = require("../config/sql-config.js");

// connection = null;

// connect = (errProcess) => {
//         this.connection = mysql.createConnection({
//             host: sqlConfig.HOST,
//             user: sqlConfig.USER,
//             password: sqlConfig.PASSWORD,
//             database: sqlConfig.DB
//         });

//         this.connection.connect(errProcess);
//     };

// module.exports = { connection, connect };




// const nhatConnect = {
//     connection: null,
//     connect : (errProcess) => {
//         nhatConnect.connection = mysql.createConnection({
//             host: sqlConfig.HOST,
//             user: sqlConfig.USER,
//             password: sqlConfig.PASSWORD,
//             database: sqlConfig.DB
//         });
    
//         this.connection.connect(errProcess);
//         console.log(this);
//     }
// }

// module.exports = nhatConnect;


const connection = mysql.createConnection({
    host: sqlConfig.HOST,
    user: sqlConfig.USER,
    password: sqlConfig.PASSWORD,
    database: sqlConfig.DB
});



module.exports = connection;
