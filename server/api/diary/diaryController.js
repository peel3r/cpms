var Diary = require('./diaryModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
    Diary.findById(id)
        .populate('author', 'username')
        .exec()
        .then(function(diary) {
            if (!diary) {
                next(new Error('No diary with that id'));
            } else {
                req.diary = diary;
                next();
            }
        }, function(err) {
            next(err);
        });
};

exports.get = function(req, res, next) {
    Diary.find({})
        .populate('author categories')
        .exec()
        .then(function(diaries){
            res.json(diaries);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var diary = req.diary;
    res.json(diary);
};

exports.put = function(req, res, next) {
    var diary = req.diary;

    var update = req.body;

    _.merge(diary, update);

    diary.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};

exports.post = function(req, res, next) {
  console.log(req);
    var newdiary = req.body;
    newdiary.author = req.user._id;
    Diary.create(newdiary)
        .then(function(diary) {
            res.json(diary);
        }, function(err) {
            logger.error(err);
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.diary.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};
