// const db = require('./db');
// const multer = require('multer');
// const path = require('path'); // Import the 'path' module

// const storage = multer.diskStorage({
//     destination: './public/projects',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage: storage });

// const editprojects = (req, res) => {
//     const { id, name, location, type } = req.body; // Added 'id' to the destructuring
//     const photoPath = req.file.filename;
//     // console.log(photoPath);

//     const query = 'UPDATE projects SET photo = ?, location = ?, type = ?, name = ? WHERE id=?';
//     db.query(query, [photoPath, location, type, name, id], (err, results) => {
//         if (err) {
//             console.error(err);
//             res.redirect('/allprojects?error=Error editing project');
//         } else {
//             res.redirect('/allprojects?success=Project edited successfully');
//         }
//     });
// };

// module.exports = {
//     editprojects,
//     upload,
// };

// const multer = require('multer');
// const path = require('path');
// const db = require('./db');

// const storage = multer.diskStorage({
//     destination: './public/projects',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage: storage });

// function editprojects(req, res) {
//     const { id, name, location, type, photo } = req.body;
//     const photoPath = req.file.filename;
//     console.log(photo);
//     if (req.file && req.file.filename) {
      
//         photoPath = req.file.filename;
//     } else {
      
//         photoPath = 'defaultFileName';
//     }

//     const sql = 'UPDATE projects SET photo = ?, location = ?, type = ?, name = ? WHERE id=?';
//     db.query(sql, [photoPath, location, type, name, id], (err, result) => {
//         if (err) {
//             console.error(err);
//             res.redirect('/allprojects?error=Error editing project');
//         } else {
//             res.redirect('/allprojects?success=Project edited successfully');
//         }
//     });
// }

// module.exports = { editprojects, upload };
// const multer = require('multer');
// const path = require('path');
// const db = require('./db');

// const storage = multer.diskStorage({
//     destination: './public/projects',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage: storage });

// function editprojects(req, res) {
//     const { id, name, location, type} = req.body;
//     let photoPath;

//     if (req.file && req.file.filename) {
//         photoPath = req.file.filename;
//     } else {
//         const query = 'SELECT photo FROM projects WHERE id=?';
//         db.query(query, [id], (err, result) => {
//             if (err) {
//                 console.error(err);
//                 res.redirect('/allprojects?error=Error retrieving previous file path');
//                 return;
//             }
//             photoPath = result.length > 0 ? result[0].photo : 'photo';
//             const updateQuery = 'UPDATE projects SET photo = ?, location = ?, type = ?, name = ? WHERE id=?';
//             db.query(updateQuery, [photoPath, location, type, name, id], (updateErr, updateResult) => {
//                 if (updateErr) {
//                     console.error(updateErr);
//                     res.redirect('/allprojects?error=Error editing project');
//                 } else {
//                     res.redirect('/allprojects?success=Project edited successfully');
//                 }
//             });
//         });
//         return;
//     }
// }

// module.exports = { editprojects, upload };

// const multer = require('multer');
// const path = require('path');
// const db = require('./db');

// const storage = multer.diskStorage({
//     destination: './public/projects',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage: storage });

// function editprojects(req, res) {
//     const { id, name, location, type } = req.body;
//     let photoPath;

//     if (req.file && req.file.filename) {
//         photoPath = req.file.filename;
//     } else {
//         const query = 'SELECT photo FROM projects WHERE id=?';
//         db.query(query, [id], (err, result) => {
//             if (err) {
//                 console.error(err);
//                 res.redirect('/allprojects?error=Error retrieving previous file path');
//                 return;
//             }

//             // Use the retrieved previous file path or set a default value
//             photoPath = result.length > 0 ? result[0].photo : 'defaultFileName';

//             // Continue with the database update
//             const updateQuery = 'UPDATE projects SET photo = ?, location = ?, type = ?, name = ? WHERE id=?';
//             db.query(updateQuery, [photoPath, location, type, name, id], (updateErr, updateResult) => {
//                 if (updateErr) {
//                     console.error(updateErr);
//                     res.redirect('/allprojects?error=Error editing project');
//                 } else {
//                     res.redirect('/allprojects?success=Project edited successfully');
//                 }
//             });
//         });
//         return;
//     }
// }

// module.exports = { editprojects, upload };

const multer = require('multer');
const path = require('path');
const db = require('./db');

const storage = multer.diskStorage({
    destination: './public/projects',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

function editprojects(req, res) {
    const { id, name, location, type } = req.body;
    let photoPath;

    const query = 'SELECT photo FROM projects WHERE id=?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.redirect('/allprojects?error=Error retrieving previous file path');
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
        const updateQuery = 'UPDATE projects SET photo = ?, location = ?, type = ?, name = ? WHERE id=?';
        db.query(updateQuery, [photoPath, location, type, name, id], (updateErr, updateResult) => {
            if (updateErr) {
                console.error(updateErr);
                res.redirect('/allprojects?error=Error editing project');
            } else {
                res.redirect('/allprojects?success=Project edited successfully');
            }
        });
    });
}

module.exports = { editprojects, upload };
