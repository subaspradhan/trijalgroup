// const express = require('express');
// const router = express.Router();
// const { getDataFromDatabase } = require('../modals/allphotos');
// router.get('/', (req, res) => {
//   getDataFromDatabase((error, data) => {
//     if (error) {
     
//         res.send('Error fetching data');
//         return;
//     }else {
        
//       res.render('home',data);
//     }
// });
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const { getDataFromDatabase } = require('../modals/allphotos');
// const { getDataFromDatabase } = require('../modals/allblogs');

// router.get('/', (req, res) => {
//   getDataFromDatabase((error, data) => {
//     if (error) {
//       res.send('Error fetching data');
//     } else {
//       res.render('home', { galleryData: data }); 
//     }
//   });
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { getDataFromDatabase: getGalleryData } = require('../modals/allphotos');
const { getDataFromDatabase: getBlogData } = require('../modals/allblogs');
const { getProject, getBlog } = require('../modals/totals');

router.get('/', (req, res) => {
  // Assuming both getGalleryData and getBlogData have a callback structure like (error, data)
  
  // Fetch gallery data
  getGalleryData((galleryError, galleryData) => {
    if (galleryError) {
      res.send('Error fetching gallery data');
    } else {
      getBlogData((blogError, blogData) => {
        if (blogError) {
          res.send('Error fetching blog data');
        } else {
          getProject((error, totalProjects) => {
            if (error) {
              // Handle the error
              res.send('Error fetching teacher data');
            }else{
              getBlog((error, totalBlogs) => {
                if (error) {
                  // Handle the error
                  res.send('Error fetching student data');
                  return;
                }else{
                  res.render('home', { galleryData, blogData, totalProjects, totalBlogs });
                }
              });
            }
           });
        }
      });
    }
  });
});

module.exports = router;

