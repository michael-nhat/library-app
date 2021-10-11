module.exports = {
    multipleToObj: function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject());
    },
    oneToObj: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
