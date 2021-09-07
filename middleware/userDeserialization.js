//jshint esversion:10

// import modules here
const app = require('../app');
const User = require('../models/user');

const userDeserialization = (req, res, next) => {
  const userID = req.session.userId;

  if (userID) {
    User.findById(userID)
      .then((user) => {
        req.user = user;
        req.app.locals.user = req.user;
        next();
      })
      .catch((error) => next(error));
  }

  next();
};

module.exports = userDeserialization;
