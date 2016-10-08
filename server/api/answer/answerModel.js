var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerText: {
        type: String,
        required: false,
    },
  answerPoints: {
    type: String,
    required: false,
  },
  answerId: {
    type: String,
    required: false,
  },

    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('answer', AnswerSchema);
