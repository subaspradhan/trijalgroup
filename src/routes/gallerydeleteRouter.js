const express = require('express');
const router = express.Router();
const deletegallery = require('../modals/deletegallery');
router.get('/:id', (req, res) => {
  const id = req.params.id;
  deletegallery.deletePhotoByid(id, (error, result) => {
    if (error) {
 
      return res.status(500).send('Error deleting gallery photo');
    }

   
    res.send(
        '<script>window.location.href = "/allphotos";</script>'
      );
  });
});

module.exports = router;