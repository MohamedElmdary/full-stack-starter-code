const router = require('express').Router();

router.post('/user', (req, res, next) => {
  console.log('body', req.body);
  // access database and do magic stuff
  res.json({
    user: req.body,
    msg: 'any message or user or anything'
  });
});

module.exports = router;
