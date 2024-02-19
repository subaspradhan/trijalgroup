const express = require('express');
const router = express.Router();

const { addcontacts } = require('../modals/addcontacts');

router.get('/', (req, res) => {
    const otherData = {
        // Your data properties here
      };
    res.render('contact', { req: req, otherData: otherData });

});

router.post('/', addcontacts);

module.exports = router;