const db = require('./db');

function getDataByProjectid(id, callback) {
    const query = 'SELECT * FROM projects WHERE id = ?';
  
   
  
      db.query(query, [id], (queryError, results) => {
      
  
        if (queryError) {
          return callback(queryError, null);
        }
  
        return callback(null, results);
      });
    // });
  }
  
  module.exports = {
    getDataByProjectid,
  };