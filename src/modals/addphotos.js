const multer = require('multer');
const path = require('path');
const db = require('./db');

const storage = multer.diskStorage({
    destination: './public/gallery',
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
function addphotos(req, res) {
    const { name, type } = req.body;
    const photoPath = req.file.filename;

    const sql = 'INSERT INTO gallery (photo, type, name) VALUES (?, ?, ?)';
    db.query(sql, [photoPath, type, name], (err, result) => {
        if (err) throw err;
        res.redirect('/allphotos')
    });
}

module.exports = { addphotos,upload };