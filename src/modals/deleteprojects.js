const db = require('./db');


const deleteProjectByid = (id, callback) => {
  const query = 'DELETE FROM projects WHERE id = ?';

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
    deleteProjectByid,
};