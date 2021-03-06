var User = require('../api/user/userModel');
var signToken = require('./auth').signToken;
var verifyUser = require('./auth').verifyUser;

exports.signin = function(req, res, next) {
    // req.user will be there from the middleware
    // verify user. Then we can just create a token
    // and send it back for the client to consume
    var token = signToken(req.user._id);
    var status = verifyUser(req.status)
    res.json({token: token, status: status, user_id: req.user._id, error_message: res.statusMessage, username: req.user.username});
};
