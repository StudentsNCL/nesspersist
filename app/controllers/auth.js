var ness = require('nessjs');

module.exports = function (req, res, next) {
    if (!req.session.user || !req.session.user.id) {
        if(req.body.cookie){
            getUser(req.body.cookie, function(err, user){
                if(err){
                    res.sendStatus(401);
                }
                else{
                    req.session.user = user;
                    next();
                }
            });
        }
        else{
            return res.sendStatus(401);
        }
    }
    else{
        req.session.touch();
        next();
    }
}

function getUser(cookie, callback){
     ness.getUser({cookie: cookie}, function(err, user){
        if(err){
            callback({error: 401}, null);
        }
        else{
            callback(null, user);
        }
    });
}
