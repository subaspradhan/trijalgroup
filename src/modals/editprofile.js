const multer = require('multer');
const path = require('path');
const db = require('./db');
function editprofile(req, res) {
    const { id, name, email, phone, password } = req.body;
    
        const updateQuery = 'UPDATE admin SET name = ?, phno = ?, username = ?, password = ? WHERE id=?';
        db.query(updateQuery, [name, phone, email, password, id], (updateErr, updateResult) => {
            if (updateErr) {
                console.error(updateErr);
                res.redirect('/viewprofile?error=Error editing project');
            } else {
                res.redirect('/viewprofile?success=Admin edited successfully');
            }
        });

}

module.exports = { editprofile };