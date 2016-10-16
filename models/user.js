// user.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

//user 架构
var User = new Schema({
	username: String,
	password: String,
	admin: {
		type: Boolean,
		default: false
	}
});

User.plugin(passportLocalMongoose);

//暴露出接口
module.exports = mongoose.model('User', User);