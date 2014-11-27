var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/Marks');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', function callback() {
    console.log("DB ready");
});
