
const db = require('./db');

function addcontacts(req, res) {
    const { name, email, massage, phone } = req.body;

    const sql = 'INSERT INTO enquriy (name, email, massage, phone) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, massage, phone], (err, result) => {
        if (err) throw err;
        res.redirect('/contact')
    });
}

module.exports = { addcontacts };