const express = require('express');
const router = express.Router();
const { getDataFromDatabase } = require('../modals/gallerypage');

router.get('/', (req, res) => {
    getDataFromDatabase((error, data) => {
        if (error) {
         
            res.send('Error fetching data');
            return;
        }else {
            
            res.render('gallerypage', { data });
        }
    });
    });




module.exports = router;