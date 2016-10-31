var Goal = require('./goalModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
    Goal.findById(id)
        .populate('author', 'username')
        .exec()
        .then(function(goal) {
            if (!goal) {
                next(new Error('No goal with that id'));
            } else {
                req.goal = goal;
                next();
            }
        }, function(err) {
            next(err);
        });
};

exports.get = function(req, res, next) {
    Goal.find({})
        .populate('author categories')
        .exec()
        .then(function(goals){
            res.json(goals);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var goal = req.goal;
    res.json(goal);
};

exports.put = function(req, res, next) {
    var goal = req.goal;

    var update = req.body;

    _.merge(goal, update);

    goal.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};

exports.post = function(req, res, next) {
  console.log('hmm',req);
    var newgoal = req.body;
    newgoal.author = req.user._id;
    Goal.create(newgoal)
        .then(function(goal) {
            res.json(goal);
        }, function(err) {
            logger.error(err);
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.goal.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};
