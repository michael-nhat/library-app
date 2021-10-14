const mongoose = require('mongoose');

async function connect_mongodb() {
    try {
        // await mongoose.connect('mongodb://localhost:27017/mongo_db1', {


        // await mongoose.connect('mongodb://nhat:nhat@127.0.0.1:27017/mongo_db1?authSource=mongo_db1', {
        await mongoose.connect('mongodb+srv://nhathoang:Aq_123456@cluster0.jgtgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {



            // await mongoose.connect('mongodb://nhat:nhat@localhost:27017/?authSource=mongo_db1&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect mongodb oKKK!');
    } catch (error) {
        console.log('Connect mongodb fail!');
    }
}

module.exports = { connect_mongodb };

// this create user mongodb
// db.createUser({ user: "nhat", pwd: "nhat", roles: [{ role: "readWrite", db: "mongo_db1" }] })

