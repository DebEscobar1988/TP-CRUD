// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.???('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/', productsController.create); 
router.put('/update/:id', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.???('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.???('/:id/???', productsController.edit); 
router.???('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;