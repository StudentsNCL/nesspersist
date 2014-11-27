var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');

var schema = new mongoose.Schema({
    id: {type: String, required: true}
});

schema.plugin(deepPopulate);

var User = exports.schema = mongoose.model('User', schema);

exports.findOrCreate = function(id, callback){
	User.findOne({id: id}).populate('modules').exec(function(err, user){
		if(err)
			callback(err, null);
		else if(!user){
			var u = new User({
				id: id
			});
			u.save(callback(err, user));
		}
		else{
			callback(err, user);
		}
	});
}

exports.findAll = function(id, callback){
	User.findOne({id: id}).deepPopulate('modules, modules.coursework, ');
}
