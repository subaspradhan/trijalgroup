// const express = require('express');
// const router = express.Router();
// const { getDataFromDatabase } = require('../modals/allblogs');
// router.get('/', (req, res) => {
//     getDataFromDatabase((error, data) => {
//         if (error) {
//             res.send('Error fetching data');
//             return;
//         }
//         if (data && data.length > 0) {
//             const rowsWithImageData = data.map((row) => {
//                 const imagedata = row.image ? row.image.toString('base64') : null;
//                 return { ...row, imagedata };
//             });
//             res.render('pages/allblogs', { data: rowsWithImageData });
//         } else {
//             res.render('pages/allblogs', { data: [], imagedata: null });
//         }
//     });
// });



// module.exports = router;
const express = require('express');
const router = express.Router();
const { getDataFromDatabase } = require('../modals/allblogs');

router.get('/', (req, res) => {
    getDataFromDatabase((error, data) => {
        if (error) {
         
            res.send('Error fetching data');
            return;
        }else {
            
            res.render('pages/allblogs', { data });
        }
    });
    });




module.exports = router;