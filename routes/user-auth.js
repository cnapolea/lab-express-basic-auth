// jshint esversion:10

// import packages here
const bcrypt = require('bcryptjs');
const express = require('express');

const app = require('../app');

const {
  signUpGetController,
  signUpPostController,
  loginGetController,
  loginPostController
} = require('../controllers/user-auth');

const userAuthRouter = express.Router();

userAuthRouter.get('/sign-up', signUpGetController);

userAuthRouter.post('/sign-up', signUpPostController);

userAuthRouter.get('/login', loginGetController);

userAuthRouter.post('/login', loginPostController);

userAuthRouter.post('/logout', (req, res, next) => {});

module.exports = userAuthRouter;
