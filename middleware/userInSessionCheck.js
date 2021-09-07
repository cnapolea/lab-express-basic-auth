// jshint esversion:10

const userSessionCheck = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/user-authentication/login');
  }
};

module.exports = userSessionCheck;
