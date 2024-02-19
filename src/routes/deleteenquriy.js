const express = require('express');
const router = express.Router();
const deleteenquriy = require('../modals/deleteenquriy');
router.get('/:id', (req, res) => {
  const id = req.params.id;
  deleteenquriy.deleteEnquriyByid(id, (error, result) => {
    if (error) {
 
      return res.status(500).send('Error deleting blogs');
    }

   
    res.send(
        '<script>window.location.href = "/enquriy";</script>'
      );
  });
});

module.exports = router;