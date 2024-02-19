const express = require('express');
const router = express.Router();
const deleteblogs = require('../modals/deleteblogs');
router.get('/:id', (req, res) => {
  const id = req.params.id;
  deleteblogs.deleteBlogByid(id, (error, result) => {
    if (error) {
 
      return res.status(500).send('Error deleting blogs');
    }

   
    res.send(
        '<script>window.location.href = "/allblogs";</script>'
      );
  });
});

module.exports = router;