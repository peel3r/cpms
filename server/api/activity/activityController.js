var Activity = require('./activityModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
    Activity.findById(id)
      .populate('author', 'username')
      .exec()
      .then(function(activity) {
          if (!activity) {
              next(new Error('No activity with that id'));
          } else {
              req.activity = activity;
              next();
          }
      }, function(err) {
          next(err);
      });
};

exports.get = function(req, res, next) {
    Activity.find({})
      .populate('author categories')
      .exec()
      .then(function(categories){
          res.json(categories);
      }, function(err){
          next(err);
      });
};

exports.getOne = function(req, res, next) {
    var activity = req.activity;
    res.json(activity);
};

exports.put = function(req, res, next) {
    var activity = req.activity;

    var update = req.body;

    _.merge(activity, update);

    activity.save(function(err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};

exports.post = function(req, res, next) {
    var newactivity = req.body;
    newactivity.author = req.user._id;
    Activity.create(newactivity)
        .then(function(activity) {
            res.json(activity);
        }, function(err) {
          logger.error(err);
          next(err);
        });
};

exports.delete = function(req, res, next) {
    req.activity.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};
