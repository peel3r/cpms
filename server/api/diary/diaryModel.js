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

  // Overall Pain Fatigue

  overAllPainLevel: {
    type: String,
    required: false
  },
  overAllMoodLevel: {
    type: String,
    required: false
  },

  // Girdle

  shoulderGirdleLeft: {
    type: String,
    required: false
  },
  shoulderGirdleLeftDesc: {
    type: String,
    required: false
  },
  shoulderGirdleRight: {
    type: String,
    required: false
  },
  shoulderGirdleRightDesc: {
    type: String,
    required: false
  },

  // Arms

  upperArmRight: {
    type: String,
    required: false
  },
  upperArmRightDesc: {
    type: String,
    required: false
  },
  upperArmLeft: {
    type: String,
    required: false
  },
  upperArmLeftDesc: {
    type: String,
    required: false
  },
  lowerArmRight: {
    type: String,
    required: false
  },
  lowerArmRightDesc: {
    type: String,
    required: false
  },
  lowerArmLeft: {
    type: String,
    required: false
  },
  lowerArmLeftDesc: {
    type: String,
    required: false
  },

  // Hips

  hipRight: {
    type: String,
    required: false
  },
  hipRightDesc: {
    type: String,
    required: false
  },
  hipLeft: {
    type: String,
    required: false
  },
  hipLeftDesc: {
    type: String,
    required: false
  },

  // Legs

  upperLegRight: {
    type: String,
    required: false
  },
  upperLegRightDesc: {
    type: String,
    required: false
  },
  upperLegLeft: {
    type: String,
    required: false
  },
  upperLegLeftDesc: {
    type: String,
    required: false
  },
  lowerLegRight: {
    type: String,
    required: false
  },
  lowerLegRightDesc: {
    type: String,
    required: false
  },
  lowerLegLeft: {
    type: String,
    required: false
  },
  lowerLegLeftDesc: {
    type: String,
    required: false
  },

  // Jaw

  jawRight: {
    type: String,
    required: false
  },
  jawRightDesc: {
    type: String,
    required: false
  },
  jawLeft: {
    type: String,
    required: false
  },
  jawLeftDesc: {
    type: String,
    required: false
  },

  // Chest

  chest: {
    type: String,
    required: false
  },
  chestDesc: {
    type: String,
    required: false
  },

  // Neck

  neck: {
    type: String,
    required: false
  },
  neckDesc: {
    type: String,
    required: false
  },

  // Abdomen

  abdomen: {
    type: String,
    required: false
  },
  abdomenDesc: {
    type: String,
    required: false
  },

  // Back

  upperBack: {
    type: String,
    required: false
  },
  upperBackDesc: {
    type: String,
    required: false
  },

  lowerBack: {
    type: String,
    required: false
  },
  lowerBackDesc: {
    type: String,
    required: false
  },

  // Mood

  moodLevel: {
    type: Number,
    required: false
  },

  author: {type: Schema.Types.ObjectId, ref: 'user'},

  categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
});

module.exports = mongoose.model('diary', DiarySchema);
