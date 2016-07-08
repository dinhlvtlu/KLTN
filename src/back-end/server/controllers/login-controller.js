var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var moment = require('moment');

module.exports = function(router, injector) {

    injector.run(function (AdminUser, staticConfig) {

        var default_account = {
            username: "admin",
            password: crypto.createHash('md5').update("abc123").digest("hex"),
            name: "1233333333"
        };
        AdminUser.findOne({username: default_account.username}, function (er, user) {
            if(!user) {
                AdminUser.create(default_account);
            }
        });

        router.post("/security/login",function(req,res){
            var password = crypto.createHash('md5').update(req.body.password).digest("hex");

            AdminUser.findOne({username: req.body.username, password: password}, function (err, user) {
                if(!user) return res.end();

                var expires = moment().add(7,'days').valueOf();
                var token = jwt.sign(user,staticConfig.jwt,{
                    expiresIn: expires
                });

                res.json({
                    token: token,
                    expires: expires,
                    name: user.username
                })
            });
        });

        router.post("/security",function(req,res){
            if(req.body.exp <= Date.now()) return res.end();

            var token = req.body.token;
            jwt.verify(token, staticConfig.jwt, function(err, decoded) {
                if(err) return res.end();

                AdminUser.findOne({username: decoded.username}, function (er, user) {
                    if(user) res.json({
                        name: user.username
                    });
                    else res.end();
                })
            });

        });
    })

};