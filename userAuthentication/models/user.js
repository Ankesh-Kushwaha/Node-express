const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  //keeping the username unique
    trim: true,
  }
  ,
  email: {
    type: String,
    required: true,
    unique: true,
    lowerCase: true,
    trim: true,
  },
  password: {
    type: String,
    required:true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], //only allow user and admin roles
    default:'user'
  },
  createdAt: {
    type: Date,
    default:Date.now(),
  },
  updatedAt: {
    type: Date,
    default:Date.now(),
  }
})

module.exports = mongoose.model('User', userSchema);