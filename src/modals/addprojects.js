const multer = require('multer');
const path = require('path');
const db = require('./db');

const storage = multer.diskStorage({
    destination: './public/projects',
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
function addprojects(req, res) {
    const { name, location, type } = req.body;
    const photoPath = req.file.filename;

    const sql = 'INSERT INTO projects (photo, location, type, name) VALUES (?, ?, ?, ?)';
    db.query(sql, [photoPath, location, type, name], (err, result) => {
        if (err) throw err;
        res.redirect('/allprojects')
    });
}

module.exports = { addprojects,upload };


