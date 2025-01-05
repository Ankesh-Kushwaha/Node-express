const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connection with the database get established successfully");
  }
  catch (e) {
    console.log('connection with the database get failed');
    process.exit(1);
  }
}

module.exports = connectToDB;