// jshint esversion:10

// import packages here
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const signUpGetController = (req, res, next) => {
  res.render('signup');
};

const signUpPostController = (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  User.create({
    username,
    email,
    password: hashedPassword
  })
    .then((user) => {
      console.log(user);

      req.session.userId = user._id;
      res.redirect('/');
    })
    .catch((error) => next(error));
};

const loginGetController = (req, res, next) => {
  res.render('login');
};

const loginPostController = (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  let user;

  User.findOne({ username })
    .then((document) => {
      user = document;
      console.log(user.password);
      return bcrypt.compare(password, user.password);
    })
    .then(() => {
      req.session.userId = user._id;
      res.redirect('/');
    })
    .catch((error) => next(error));
};

module.exports = {
  signUpGetController,
  signUpPostController,
  loginGetController,
  loginPostController
};
