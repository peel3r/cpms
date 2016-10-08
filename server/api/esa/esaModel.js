var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EsaSchema = new Schema({

  date: { type: Date, default: Date.now },


  text: {
    type: String,
    required: false
  },


  author: {type: Schema.Types.ObjectId, ref: 'user'},

  answers: [{type: Schema.Types.ObjectId, ref: 'answer'}]
});

module.exports = mongoose.model('esa', EsaSchema);
