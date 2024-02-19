const express = require('express');
const router = express.Router();
const { getDataFromDatabase } = require('../modals/enquriy');
router.get('/', (req, res) => {
    getDataFromDatabase((error, data) => {
        if (error) {
            res.send('Error fetching data');
            return;
        }
        if (data && data.length > 0) {
            const rowsWithImageData = data.map((row) => {
                const imagedata = row.image ? row.image.toString('base64') : null;
                return { ...row, imagedata };
            });
            res.render('pages/enquriy', { data: rowsWithImageData });
        } else {
            res.render('pages/enquriy', { data: [], imagedata: null });
        }
    });
});



module.exports = router;