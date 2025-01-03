const Product = require('../models/model');

const getAllProducts = async(req, res) => {
  try {
    const findProducts = await Product.find({});
    if (findProducts.length > 0) {
      res.status(202).json({
        success: true,
        message: 'products fetched successfully',
        data:findProducts
        })
     }
  }
  catch (e) {
    console.error('products not found');
    res.status(500).json({
      success: false,
      message:"products not found"
    })
  } 
}

const getOneProducts = async(req,res) => {
  try {
    const productId = req.params.id;
    const findProductByid = await Product.findById(productId);
    if (!findProductByid) {
      res.status(404).json({
        success: false,
        message:'product not found try with different id'
        })
    }

    res.status(202).json({
      success: true,
      message: 'product found',
      data:findProductByid,
    })
  }
  catch (e) {
    console.error('product not found', e);
    res.status(500).json({
      success: false,
      message:'something went wrong!'
    })
  }
}

const addProducts = async(req,res) => {
  try {
       const productfromForm = req.body;
      const newProduct = await Product.create(productfromForm);
    if (newProduct) {
        res.status(202).json({
        success: true,
          message: 'Products created successfully !',
        data:newProduct
    })
  }
  }
  catch (e) {
    console.log(e);
    res.status(404).json({
      success: false,
      message:'the product cannot be added something went wrong!'
    })
  }
}

const deletProduct = async(req,res) => {
  try {
    const productId = req.params.id;
    const itemDelete = await Product.findByIdAndDelete(productId);
    if (!itemDelete) {
      res.status(404).json({
        success: false,
        message:"products does not found with the given id"
        })
    }

    res.status(202).json({
      success: true,
      message: 'item with the provided product id deleted successfully!',
      data:itemDelete,
    })
  }
  catch (e) {
    console.error('something went wrong', e);
    res.status(500).json({
      success: false,
      message:"something went wrong please try after sometime!"
    })
  }
}

const updateProducts = async(req,res) => {
  try {
      const newProduct = req.body;
    const newProductId = req.params.id;
     //updating value
      const updatedProduct =await Product.findByIdAndUpdate(newProductId, { $set: newProduct}, { new: true });
      
    if (!updatedProduct) {
      res.status(404).json({
        success: false,
        message:'product does not found with the given id'
        })
    }

    res.status(202).json({
      success: true,
      message: "Product get updated susscessfully!",
      data:updatedProduct
    })
  }
  catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message:"something went wrong please try after some time"
    })
  }
}

module.exports = {
  getAllProducts,
  getOneProducts,
  addProducts,
  deletProduct,
  updateProducts
}