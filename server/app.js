// intro point for server.


// setup config first before anything by requiring it
var config = require('./config');
var app = require('./index');
var logger = require('./util/logger');

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);
