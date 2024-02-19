const express = require('express');
const router = express.Router();
const bloggetid = require('../modals/bloggetid');
const { editblogs, upload } = require('../modals/editblogs');

router.get('/:id', (req, res) => {
      const id = req.params.id;
      
    
      bloggetid.getDataByBlogid(id, (error, data) => {
        if (error) {
          
          return res.status(500).send('Error fetching data');
        }
    
      
        res.render('pages/editblogs', { data, error: req.query.error });
      });
    });

router.post('/:id', upload.single('photo'), editblogs);

module.exports = router;
