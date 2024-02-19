const express = require('express');
const router = express.Router();
const { getDataFromDatabase } = require('../modals/blogpage');

router.get('/', (req, res) => {
    getDataFromDatabase((error, data) => {
        if (error) {
         
            res.send('Error fetching data');
            return;
        }else {
            
            res.render('blogpage', { data });
        }
    });
    });




module.exports = router;