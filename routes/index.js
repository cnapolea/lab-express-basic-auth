const { Router } = require('express');
const router = Router();

const userInSessionCheck = require('../middleware/userInSessionCheck');

router.get('/', userInSessionCheck, (req, res, next) => {
  res.render('index');
});

module.exports = router;
