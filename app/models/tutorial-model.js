const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TutorialSchema = new Schema({
        title: { type: String, maxlength: 255, require: true },
        description: { type: String, maxlength: 255, require: true },
        published: { type: Boolean, require: false }
    },
                            {
                                timestamps: true,
                            });

TutorialSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

Tutorial = mongoose.model('tutorials', TutorialSchema);

module.exports = Tutorial;
