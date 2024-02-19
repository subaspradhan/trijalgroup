const db = require('./db');


const deleteEnquriyByid = (id, callback) => {
  const query = 'DELETE FROM enquriy WHERE id = ?';

  db.query(query, [id], (error, result) => {
    if (error) {
      // Handle the error
      return callback(error, null);
    }

     // Pass the result to the callback
    callback(null, result);
  });
};

module.exports = {
    deleteEnquriyByid,
};