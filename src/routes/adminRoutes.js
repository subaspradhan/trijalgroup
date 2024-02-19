const express = require('express');
const router = express.Router();
const { getProject, getBlog, getPhoto, getEnquriy } = require('../modals/totals');

// Middleware to protect admin routes
router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
});
// router.get('/', (req, res) => {
//   res.render('admin', { user: req.user }); 
// });
router.get('/', (req, res) => {
  getProject((error, totalProjects) => {
    if (error) {
      // Handle the error
      res.send('Error fetching teacher data');
      return;
    }
    getBlog((error, totalBlogs) => {
      if (error) {
        // Handle the error
        res.send('Error fetching student data');
        return;
      }
      getPhoto((error, totalPhotos) => {
        if (error) {
          // Handle the error
          res.send('Error fetching book data');
          return;
        }
        getEnquriy((error, totalEnquriy) => {
          if (error) {
            // Handle the error
            res.send('Error fetching book data');
            return;
          }
          res.render('admin', { user: req.user, totalProjects, totalBlogs, totalPhotos, totalEnquriy });
        });
      });
    });
  });
});


module.exports = router;
