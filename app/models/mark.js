var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user: {type: String, required: true},
    module: {type: String, required: true},
    coursework: {type: String, required: true},
    mark: {type: Number, required: true}
});

var Mark = exports.schema = mongoose.model('Mark', schema);

exports.findMarks = function(user, module, callback){
    Mark.find({user: user, module: module}).select('coursework mark -_id').exec(callback);
}

exports.findAndUpdate = function(user, module, coursework, mark, callback){
    var options = {new: true, upsert: true};
    Mark.findOneAndUpdate({user: user, module: module, coursework: coursework}, {mark: mark}, options).exec(callback);
}
