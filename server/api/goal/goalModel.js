var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GoalSchema = new Schema({

  date: { type: Date, default: Date.now },


  title: {
    type: String,
    required: true,
    unique: true
  },

  type: {
    type: String,
    required: false
  },

  color: {
    type: String,
    required: false
  },

  duration: {
    type: Number,
    required: false
  },

  done: {
    type: Boolean,
    required: false
  },

  author: {type: Schema.Types.ObjectId, ref: 'user'},

  activities: [{type: Schema.Types.ObjectId, ref: 'activity'}]
});

module.exports = mongoose.model('goal', GoalSchema);
