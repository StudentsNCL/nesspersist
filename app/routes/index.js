var ctrl = require('../controllers');
var auth = require('../controllers/auth');
var mongoose = require('mongoose');

module.exports = function (app) {

    app.get('/status', function(req, res){
        if(mongoose.connection.readyState)
            res.json({success: true});
        else
            res.status(500).json({error: true});
    });

    app.post('/addmark', auth, ctrl.addMark);

    app.post('/getmarks', auth, ctrl.getMarks);

}
