var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PainSchema = new Schema({
  painName: {
    type: String,
    required: false,
    unique: false
  },

  painDescription: {
    type: Boolean,
    required: false
  },

  painPresence: {
    type: String,
    required: false
  },

  painPlace: {
    type: String,
    required: false
  },

  painSeverity: {
    type: String,
    required: false
  },


});

module.exports = mongoose.model('pain', PainSchema);
