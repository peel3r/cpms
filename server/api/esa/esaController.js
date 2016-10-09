var Esa = require('./esaModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
  Esa.findById(id)
    .populate('author', 'username')
    .exec()
    .then(function(esa) {
      if (!esa) {
        next(new Error('No diary with that id'));
      } else {
        req.esa = esa;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Esa.find({})
    .populate('author categories')
    .exec()
    .then(function(esas){
      res.json(esas);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var esa = req.esa;
  res.json(esa);
};

exports.put = function(req, res, next) {
  var esa = req.esa;

  var update = req.body;

  _.merge(esa, update);

  esa.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  console.log(req);
  var newesa = req.body;
  newesa.author = req.user._id;
  Esa.create(newesa)
    .then(function(esa) {
      res.json(esa);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.esa.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
