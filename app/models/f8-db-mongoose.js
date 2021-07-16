const mongoose = require('mongoose');

async function connect_mongodb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mongo_db1', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect mongodb oKKK!');
    } catch (error) {
        console.log('Connect mongodb fail!');
    }
}

module.exports = { connect_mongodb };
