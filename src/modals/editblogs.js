// const multer = require('multer');
// const path = require('path');
// const db = require('./db');

// const storage = multer.diskStorage({
//     destination: './public/blogs',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage: storage });

// function editblogs(req, res) {
//     const { id, details, head, date } = req.body;
//     let photoPath;

//     if (req.file && req.file.filename) {
//         photoPath = req.file.filename;
//     } else {
//         const query = 'SELECT photo FROM blogs WHERE id=?';
//         db.query(query, [id], (err, result) => {
//             if (err) {
//                 console.error(err);
//                 res.redirect('/allblogs?error=Error retrieving previous file path');
//                 return;
//             }

//             // Use the retrieved previous file path or set a default value
//             photoPath = result.length > 0 ? result[0].photo : 'defaultFileName';

//             // Continue with the database update
//             const updateQuery = 'UPDATE blogs SET photo = ?, details = ?, head = ?, date = ? WHERE id=?';
//             db.query(updateQuery, [photoPath, details, head, date, id], (updateErr, updateResult) => {
//                 if (updateErr) {
//                     console.error(updateErr);
//                     res.redirect('/allblogs?error=Error editing project');
//                 } else {
//                     res.redirect('/allblogs?success=Project edited successfully');
//                 }
//             });
//         });
//         return;
//     }
// }

// module.exports = { editblogs, upload };
const multer = require('multer');
const path = require('path');
const db = require('./db');

const storage = multer.diskStorage({
    destination: './public/blogs',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

function editblogs(req, res) {
    const { id, details, head, date } = req.body;
    let photoPath;

    const query = 'SELECT photo FROM blogs WHERE id=?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.redirect('/allblogs?error=Error retrieving previous file path');
            return;
        }

        // Use the retrieved previous file path or set a default value
        photoPath = result.length > 0 ? result[0].photo : 'defaultFileName';

        // Check if a new file is uploaded
        if (req.file && req.file.filename) {
            // If a new file is uploaded, use the new file name
            photoPath = req.file.filename;
        }

        // Continue with the database update
        const updateQuery = 'UPDATE blogs SET photo = ?, details = ?, head = ?, date = ? WHERE id=?';
        db.query(updateQuery, [photoPath, details, head, date, id], (updateErr, updateResult) => {
            if (updateErr) {
                console.error(updateErr);
                res.redirect('/allblogs?error=Error editing project');
            } else {
                res.redirect('/allblogs?success=Project edited successfully');
            }
        });
    });
}

module.exports = { editblogs, upload };
