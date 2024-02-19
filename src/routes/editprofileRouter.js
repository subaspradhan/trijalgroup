const express = require('express');
const router = express.Router();
const getprofile = require('../modals/viewprofile');
const { editprofile } = require('../modals/editprofile');

router.get('/', (req, res) => {
      
    
      getprofile.getDataFromDatabase( (error, data) => {
        if (error) {
          
          return res.status(500).send('Error fetching data');
        }
    
      
        res.render('pages/editprofile', { data, error: req.query.error });
      });
    });

router.post('/',  editprofile);

module.exports = router;
