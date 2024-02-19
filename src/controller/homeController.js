// const db = require('../modals/db');

// // Controller for the home route
// exports.getHome = (req, res) => {
//   // Example: Query the database and render data in the view
//   db.query('SELECT * FROM students', (error, results) => {
//     if (error) {
//       res.render('pages/home');
//     } else {
//       res.render('pages/admin', { data: results });
//     }
//   });
// };