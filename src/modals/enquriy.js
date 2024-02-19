const db = require('./db');


const getDataFromDatabase = (callback) => {
  const query = 'SELECT * FROM enquriy';
  db.query(query, (error, results, fields) => {
    if (error) {
      // Handle the error, e.g., callback(error, null);
      callback(error, null);
      return;
    }
    // Process the results
    callback(null, results);
  });
};

module.exports = {
  getDataFromDatabase,
};