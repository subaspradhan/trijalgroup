// const express = require('express');
// const router = express.Router();
// const editprojects = require('../modals/editprojects');
// const projectgetid = require('../modals/projectgetid');


// router.get('/:id', (req, res) => {
//   const id = req.params.id;
  

//   projectgetid.getDataByProjectid(id, (error, data) => {
//     if (error) {
      
//       return res.status(500).send('Error fetching data');
//     }

  
//     res.render('pages/editproject', { data, error: req.query.error });
//   });
// });

// router.post('/:id',editprojects.upload.single('photo'), editprojects.editprojects);

// module.exports = router;

const express = require('express');
const router = express.Router();
const projectgetid = require('../modals/projectgetid');
const { editprojects, upload } = require('../modals/editprojects');

router.get('/:id', (req, res) => {
      const id = req.params.id;
      
    
      projectgetid.getDataByProjectid(id, (error, data) => {
        if (error) {
          
          return res.status(500).send('Error fetching data');
        }
    
      
        res.render('pages/editproject', { data, error: req.query.error });
      });
    });

router.post('/:id', upload.single('photo'), editprojects);

module.exports = router;

