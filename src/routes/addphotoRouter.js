const express = require('express');
const router = express.Router();

const { addphotos,upload } = require('../modals/addphotos');

router.get('/', (req, res) => {
    const otherData = {
        // Your data properties here
      };
    res.render('pages/addphoto', { req: req, otherData: otherData });

});

router.post('/', upload.single('photo'), addphotos);

module.exports = router;