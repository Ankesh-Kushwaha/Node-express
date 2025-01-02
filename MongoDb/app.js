const mongoose = require('mongoose');


//setup the connection with the data base; does not use special symbol directly incode them before using like ->Ankesh9651@ shold be written as Ankesh%40
mongoose.connect(`mongodb+srv://ankeshkush9651:Ankesh9651%40@cluster0.uatfr.mongodb.net/`).then(() => console.log('database connected sussccessfully')).catch((e) => console.log(e));

//creating the schemas for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
})

//default values are provided if the data from the client side does not passed then it takes the default value;

//user model;
const user = mongoose.model('user', userSchema);

//creatin a new model
async function runQueryExamples() {
  try { //create a new document
    // const newUser = await user.create({
    //   name: 'Ankesh Kushwaha',
    //   email: 'ankesh96512@gmail.com',
    //   age: 20,
    //   isActive: true,
    //   tags: ['developer','designer','enginner'],
    // })

    // const newUser = await user({
    //   name: 'harry potter',
    //   email: 'harry96512@gmail.com',
    //   age: 25,
    //   isActive: false,
    //   tags: ['developer','designer','enginner'],
    // })

    // await newUser.save();

    // console.log('created new User', newUser);

    // const allUser = await user.find({});//use for retriving data from the database;
    // console.log(allUser);

    //finding some specific data;
    // const getUserIsActiveFalse = await user.find({ isActive: true });
    // console.log(getUserIsActiveFalse);

    //findOne() is use for the fast access of the search for the user who is first matches the criteria
    // const getJhonSnow = await user.findOne({ name: 'jhon snow1' })
    // console.log(getJhonSnow);

    //getiing data based on id
   
    // const getlastCreateduserbyId = await user.findById(newUser._id);
    // console.log(getlastCreateduserbyId);
    //   const getlastCreateduserbyId = await user.findById('6776cecab8d335e80b84fd5f');
    // console.log(getlastCreateduserbyId);

    // retrieving data of some selected field;
    // const selectedFieldData = await user.find().select('name email -_id ')
    // console.log(selectedFieldData);

    //skipping some items;
    // const limitedUser = await user.find().limit(5).skip(1);
    // console.log(limitedUser);
    
    //taking data in sorted order
    // const sorted = await user.find().sort({ age: 1 });
    // console.log(sorted);

    //count document
    // const countDocuments = await user.find().countDocuments({ isActive: false });
    // console.log(countDocuments);

    //deleting user
    // const deletedUser = await user.findByIdAndDelete('6776d806411b50588c7ac6ce');
    // console.log(deletedUser);

    //updating user
    const updateUser = await user.findByIdAndUpdate('6776cecab8d335e80b84fd5f', {
      $set:{age:100},$push:{tags:'updated data'}
    },{new:true}) //new while return the updated document and user back;

    console.log(updateUser);
  }
  catch (e) {
      console.log('ERROR->',e)
  }
  finally {
    mongoose.connection.close();
  }
}

runQueryExamples();