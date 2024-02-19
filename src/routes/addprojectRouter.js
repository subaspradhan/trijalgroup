const express = require('express');
const router = express.Router();

const { addprojects,upload } = require('../modals/addprojects');

router.get('/', (req, res) => {
    const otherData = {
        // Your data properties here
      };
    res.render('pages/addproject', { req: req, otherData: otherData });

});

router.post('/', upload.single('photo'), addprojects);

module.exports = router;
