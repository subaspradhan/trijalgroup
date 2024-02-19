const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../modals/user');
const flash = require('connect-flash');
router.use(flash());
router.get('/', (req, res) => {
  res.render('login',{ message: req.flash('error') });
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/admin', failureRedirect: '/auth', failureFlash: true })
);

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});
module.exports = router;