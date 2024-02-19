const db = require('./db');

module.exports = {
  findByUsername: (username, callback) => {
    db.query('SELECT * FROM admin WHERE username = ?', [username], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      const user = results[0];
      return callback(null, { id: user.id, username: user.username, password: user.password });
    });
  },

  findById: (id, callback) => {
    db.query('SELECT * FROM admin WHERE id = ?', [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      const user = results[0];
      return callback(null, { id: user.id, username: user.username, password: user.password });
    });
  },
};
