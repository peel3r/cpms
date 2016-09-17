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

    painLevel: {
        type: Number,
        required: false
    },

    mood: {
        type: String,
        required: false
    },

    author: {type: Schema.Types.ObjectId, ref: 'user'},

    // categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
});

module.exports = mongoose.model('diary', DiarySchema);
