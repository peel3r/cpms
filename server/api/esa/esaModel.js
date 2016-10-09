var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EsaSchema = new Schema({

  date: { type: Date, default: Date.now },


  text: {
    type: String,
    required: false
  },


  author: {type: Schema.Types.ObjectId, ref: 'user'},

  categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
});

module.exports = mongoose.model('esa', EsaSchema);
