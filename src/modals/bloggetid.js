const db = require('./db');

function getDataByBlogid(id, callback) {
    const query = 'SELECT * FROM blogs WHERE id = ?';
  
   
  
      db.query(query, [id], (queryError, results) => {
      
  
        if (queryError) {
          return callback(queryError, null);
        }
  
        return callback(null, results);
      });
    // });
  }
  
  module.exports = {
    getDataByBlogid,
  };