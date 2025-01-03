const express = require('express');
const {getAllProducts,getOneProducts,deletProduct,updateProducts,addProducts}=require('../controllers/product-controller')

const router = express.Router();


//creating the routes for the operations;
router.get('/get',getAllProducts);
router.get('/get/:id',getOneProducts);
router.post('/add',addProducts);
router.put('/update/:id',updateProducts);
router.delete('/delete/:id',deletProduct);

module.exports = router;