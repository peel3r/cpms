var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  fatigue: {
    type: String,
    required: false
  },
  pain: {
    type: String,
    required: false
  },
  fog: {
    type: String,
    required: false
  },
  rating: {
    type: String,
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
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  },
  start: {
    type: Date,
    required: false
  },
  end: {
    type: Date,
    required: false
  },



  author: {type: Schema.Types.ObjectId, ref: 'user'},

  activities: [{type: Schema.Types.ObjectId, ref: 'activity'}]
});

module.exports = mongoose.model('activity', ActivitySchema);
