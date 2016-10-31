var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  fatigue: {
    type: Number,
    required: false
  },
  pain: {
    type: Number,
    required: false
  },
  fog: {
    type: Number,
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  comments: {
    type: String,
    required: false
  },
  relatedGoal: {
    type: String,
    required: false
  },
  done: {
    type: Boolean,
    required: false
  },
  duration: {
    type: Number,
    required: false
  },
  color: {
    type: Number,
    required: false
  },


  author: {type: Schema.Types.ObjectId, ref: 'user'},

  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('activity', ActivitySchema);
