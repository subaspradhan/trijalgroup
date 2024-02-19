const db = require('./db');


const deletePhotoByid = (id, callback) => {
  const query = 'DELETE FROM gallery WHERE id = ?';

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
    deletePhotoByid,
};