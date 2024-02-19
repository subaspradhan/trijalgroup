const express = require('express');
const router = express.Router();
const deleteprojects = require('../modals/deleteprojects');
router.get('/:id', (req, res) => {
  const id = req.params.id;
  deleteprojects.deleteProjectByid(id, (error, result) => {
    if (error) {
 
      return res.status(500).send('Error deleting projects');
    }

   
    res.send(
        '<script>window.location.href = "/allprojects";</script>'
      );
  });
});

module.exports = router;