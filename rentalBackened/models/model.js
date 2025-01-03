const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true
  },
   images: [
    {
      url: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: ''
      }
    }
  ], 
  discription: {
    type: String,
    required: true,
    trim:true
  },
  price: {
    type: Number,
    required: true,
    trim:true
  },
    category: {
    type: String,
    required: true,
    enum: [],
    trim: true
  },
    stock: {
    type: Number,
    required: true,
    min: 0
  }, 
  ratings: {
    average: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
  },
 numberOfRatings: {
      type: Number,
      default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
})

const Product = mongoose.model('Products', productSchema);

module.exports = Product;