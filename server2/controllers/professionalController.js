var Professional = require('../models/professional');
var jwt = require('jsonwebtoken');
var config = require('../config');
var superSecret = config.SUPERSECRET;
module.exports = {
  login: function(req, res) {
        //Find the user
        Professional.findOne({
            username: req.body.username
        }).select('name username password').exec(function(err, user) {
            if (err) throw err;
            //No user with that username was found
            if (!user) {
                res.json({
                    success: false,
                    message: 'Invalid username or password'
                });
            } else if (user) {
                //Check if password matches
                var validPassword = user.comparePassword(req.body.password);
                if (!validPassword) {
                    res.json({
                        success: false,
                        message: 'Invalid username or password'
                    });
                } else {
                    //If user is found and password is right create Token
                    var token = jwt.sign({
                        id: user._id,
                        username: user.username
                    }, superSecret, {
                        //Expires in 24 hours
                        expiresIn: 60 * 60 * 24
                    });
                    //Return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Login Succesful',
                        token: token,
                        id: user._id,
                        username : user.username
                    });
                }
            }
        });
    },
    register: function(req, res) {
       //Create a new instance of the User model
       var professional = new Professional();
       //Set the users name (comes from the request)
       professional.name = req.body.name;
       //Set the users username (comes from the request)
       professional.username = req.body.username;
       //Set the users password (comes from the request)
       professional.password = req.body.password;
       //Set the users email (comes from the request)
       professional.contact = req.body.contact;
       professional.categories = req.body.categories;
       professional.skills = req.body.skills;
       professional.username = req.body.username;
       professional.save(function(err) {
           if (err) {
               //Duplicate entry
               if (err.code == 11000)
                   return res.json({
                       success: false,
                       message: 'A user with that username already exists. '
                   });
               else
                  //  return res.json({
                  //      success: false,
                  //      message: 'Something goes wrong! Try later. '
                  //  });
                  return res.json(err);
           }
           //Return a message
           res.json({success: true,
               message: 'Professional created succesfully.'
           });
       });
   },
   me: function(req, res) {
        //Retrieving the user
        Professional.findById(req.decoded.id, function(err, user) {
            if (err) {
                res.json({
                    success: false,
                    message: 'Error ocurred'
                });
            } else {
                //Sending user.
                res.json(user);
            }
        })
    }
}
