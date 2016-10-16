// verify.js
var User = require('../models/user');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config.js');


exports.getToken = function(user){
	//jwt.sign(payload, secretOrPrivateKey, options, [callback])
	return jwt.sign( JSON.stringify(user), config.secretKey, {
		expiresIn: 3600
	});
};

exports.verifyOrdinaryUser = function(req, res,next){
	//检查header 或者url参数， 或者给token 的post参数
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	//decode-token
	if (token){
		//验证 secret 和 检查exp
		jwt.verify(token, config.secretKey, function (err, decoded) {
			if (err){
				var err= new Error('you are not authenticated!');
				err.status = 401;
				return next(err);
			}else{
				//如果一切正常，保存request用于其他routes
				req.decoded = decoded;
				next();
			}
		});
	}else {
		//如果没有token
		var err = new Error("no token");
		err.status= 403;
		return next(err);
	}
};


