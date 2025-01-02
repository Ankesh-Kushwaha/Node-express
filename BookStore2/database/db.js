const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ankeshkush9651:Ankesh123@cluster1.djccr.mongodb.net/');
    console.log('databse connection established sussccefully!');
  }
  catch (e) {
    console.error('Mongodb coonnection failed')
    process.exit(1);
  }
}

module.exports = connectToDB;