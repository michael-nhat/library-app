const express = require("express");
const routerImport = require('./app/routes/main-routes.js');
const mongodb = require('./app/models/f8-db-mongoose.js');
const mysqldb = require('./app/models/mysql-connect2.js');

mongodb.connect_mongodb();

mysqldb.connection.connect(err => {
    if (err) throw err;
    console.log("Connection Success!");
});

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

routerImport(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});
