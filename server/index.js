var express = require('express');
var app = express();
var api = require('./api');
var config = require('./config');
var logger = require('./util/logger');
var auth = require('./auth/routes');
// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

if (config.seed) {
    require('./util/seed');
}


// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api', api);
app.use('/auth', auth);
// set up global error handling

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

app.use(function(err, req, res, next) {
    // if error thrown from jwt validation check
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');
        return;
    }

    logger.error(err.stack);
    res.status(500).send('You must to be logged in to access this url');
});

// export the app for testing
module.exports = app;
