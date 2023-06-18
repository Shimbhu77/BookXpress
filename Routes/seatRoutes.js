const express = require('express');
const seatController = require('../Controller/seatController');
const router = express.Router();


router
  .get('/seats',seatController.getAll)
//   .get('/users/:id',userController.getOne)
//   // .post('/users',userController.post)
//   .put('/users/:id',userController.put)
//   .patch('/users/:id',userController.patch)
//   .delete('/users/:id',userController.remove);

module.exports = router;
