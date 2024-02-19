
const express = require('express');
const router = express.Router();


// Import the getDataFromDatabase function
const { getDataFromDatabase } = require('../modals/viewprofile');

// Define the route handler
router.get('/', (req, res) => {
    getDataFromDatabase((error, data) => {
        if (error) {
            // Handle the error
            res.send('Error fetching data');
            return;
        }

        res.render('pages/viewprofile', { data });
       

    
    });
});



module.exports = router;