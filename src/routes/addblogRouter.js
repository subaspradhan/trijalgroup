const express = require('express');
const router = express.Router();

const { addblogs,upload } = require('../modals/addblogs');


router.get('/', (req, res) => {
    const otherData = {
        
      };
    res.render('pages/addblogs', { req: req, otherData: otherData });

});

router.post('/', upload.single('photo'), addblogs);

module.exports = router;