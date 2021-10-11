const express = require("express");
const applyRoutes = require('./app/routes/apply-routes.js');
const mongodb = require('./app/models/f8-db-mongoose.js');
const mysqldb = require('./app/models/mysql-connect2.js');
const engines = require("consolidate");

mongodb.connect_mongodb();

mysqldb.connection.connect(err => {
    if (err) throw err;
    console.log("Connection Success!");
});

const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.engine('html', engines.swig); // take note, using 'html', not 'ejs' or 'pug'..
app.set('view engine', 'html'); // also 'html' here.

app.engine('pug', require('pug').__express);
app.engine('ejs', require('ejs').__express);

applyRoutes(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});
