const db = require('./db');


const getDataFromDatabase = (callback) => {
  const query = 'SELECT * FROM admin';
  db.query(query, (error, results, fields) => {
    if (error) {
      
      callback(error, null);
      return;
    }

    callback(null, results);
  });
};

module.exports = {
  getDataFromDatabase,
};