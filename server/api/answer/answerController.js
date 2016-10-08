var Answer = require('./canswerModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
    Category.findById(id)
        .then(function(answer) {
            if (!answer) {
                next(new Error('No answer with that id'));
            } else {
                req.answer = answer;
                next();
            }
        }, function(err) {
            next(err);
        });
};

exports.get = function(req, res, next) {
    Answer.find({})
        .then(function(answers){
            res.json(answers);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var answer = req.answer;
    res.json(answer);
};

exports.put = function(req, res, next) {
    var answer = req.answer;

    var update = req.body;

    _.merge(answer, update);

    answer.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};

exports.post = function(req, res, next) {
    var newanswer = req.body;

    Answer.create(newanswer)
        .then(function(answer) {
            res.json(answer);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.answer.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};
