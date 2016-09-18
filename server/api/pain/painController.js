var Pain = require('./painModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Pain.findById(id)
    .then(function(pain) {
      if (!pain) {
        next(new Error('No pain with that id'));
      } else {
        req.pain = pain;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Pain.find({})
    .then(function(pains){
      res.json(pains);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var pain = req.pain;
  res.json(painy);
};

exports.put = function(req, res, next) {
  var pain = req.pain;

  var update = req.body;

  _.merge(pain, update);

  category.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newpain = req.body;

  Pain.create(newpain)
    .then(function(pain) {
      res.json(pain);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.pain.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
