let rs = require('readline-sync');
let User = require('../models/user.js');
let settings = require('../config/settings.js');
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);

mongoose.connect(settings.db);

let setup = () => {
  console.log("Starting initial authorization...");
  let username = rs.question("Username: ");
  let password = rs.question("Password: ", {hideEchoBack: true});
  let newUser = new User({username, password: bcrypt.hashSync(username + password, salt), priv: "admin"});
  newUser.save((err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log("User saved");
    }
  });
}

setup();
