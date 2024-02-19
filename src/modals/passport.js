const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./user');

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findByUsername(username, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user || user.password !== password) {
        return done(null, false, { message: 'Incorrect username or password' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});