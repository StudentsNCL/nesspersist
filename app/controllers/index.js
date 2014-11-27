var Mark = require('../models/mark');

exports.addMark = function(req, res){
    if(!req.body.module || !req.body.coursework || !req.body.mark){
        return res.status(400).send({error: 400});
    }

    Mark.findAndUpdate(req.session.user.id, req.body.module, req.body.coursework, req.body.mark, function(err, mark){
        if (err) {
            res.sendStatus(400);
        }
        else {
            res.sendStatus(200);
        }
    });
}

exports.getMarks = function(req, res){
    Mark.findMarks(req.session.user.id, req.body.module, function(err, marks){
        if (err) {
            return res.sendStatus(500);
        }
        else {
            res.json(marks);
        }

    });
}

