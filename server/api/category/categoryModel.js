var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        required: false,
    },

    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('category', CategorySchema);
