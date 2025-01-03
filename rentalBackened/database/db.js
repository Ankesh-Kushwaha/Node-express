const mongoose = require('mongoose');

const connectToDB = async() => {
  try {
    await mongoose.connect('mongodb+srv://ankeshkush9651:Ankesh123@cluster0.w0jpy.mongodb.net/');
    console.log('databse connection get successful!');
  }
  catch (e) {
    console.error('database connection get failed !',e);
    process.exit(1);
  }
}


module.exports = connectToDB;