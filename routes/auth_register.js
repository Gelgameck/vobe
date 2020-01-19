let express = require('express');
let User = require("./../bin/models/user.js");
let router = express.Router();

/* GET home page. */
router.post('/auth/register', function (req, res, next) {
    console.log(req.body);
    if (req.body.email &&
        req.body.username &&
        req.body.password) {

        let userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
            if (err)
                return next(err);
            else
                return res.redirect('/' + user.username);

        });
    }
});

module.exports = router;
