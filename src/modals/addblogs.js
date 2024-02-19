const multer = require('multer');
const path = require('path');
const db = require('./db');

const storage = multer.diskStorage({
    destination: './public/blogs',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});
// var storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, './public/syllabus')    
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

const upload = multer({ storage: storage });
function addblogs(req, res) {
    const { details, head, date } = req.body;
    const photoPath = req.file.filename;

    const sql = 'INSERT INTO blogs (photo, details, head, date) VALUES (?, ?, ?, ?)';
    db.query(sql, [photoPath, details, head, date], (err, result) => {
        if (err) throw err;
        res.redirect('/allblogs')
    });
}

module.exports = { addblogs,upload };