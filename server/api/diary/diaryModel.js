var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DiarySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    text: {
        type: String,
        required: true
    },

    overAllPainLevel: {
        type: String,
        required: false
    },

    moodLevel: {
        type: Number,
        required: false
    },

    author: {type: Schema.Types.ObjectId, ref: 'user'},
    pain: {type: Schema.Types.ObjectId, ref: 'pain'}

    // categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
});

module.exports = mongoose.model('diary', DiarySchema);
