const db = require('./db');

const getProject = (callback) => {
  const query = 'SELECT COUNT(*) as totalProjects FROM projects';
  db.query(query, (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, results[0].totalProjects);
  });
};

const getBlog = (callback) => {
  const query = 'SELECT COUNT(*) as totalBlogs FROM blogs';
  db.query(query, (error, results, fields) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, results[0].totalBlogs);
  });
};
const getPhoto = (callback) => {
    const query = 'SELECT COUNT(*) as totalPhotos FROM gallery';
    db.query(query, (error, results, fields) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results[0].totalPhotos);
    });
};
const getEnquriy = (callback) => {
    const query = 'SELECT COUNT(*) as totalEnquriy FROM enquriy';
    db.query(query, (error, results, fields) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results[0].totalEnquriy);
    });
};
  
 

module.exports = {
    getProject,
    getBlog,
    getPhoto,
    getEnquriy,
};
