var ctrl = require('../controllers');
var auth = require('../controllers/auth');

module.exports = function (app) {

    app.post('/addmark', auth, ctrl.addMark);

    app.post('/getmarks', auth, ctrl.getMarks);

}
