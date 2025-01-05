const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')

//register controller
const registerUser = async (req,res) => {
  try {
    //extract user information from our request body;
    const {username,email,password,role} = req.body;
    
    //if the user is already exist in our database then we will send a message to the user
    const checkExistingUser = await User.find({ $or: [{ username }, { email }] });
    if (checkExistingUser.length>0) {
        return res.status(400).json({
          success: false,
          message:'user already exists either with this username or email. Please try with another username or email',
        })
    }
    
    //hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new user and save it in your database
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword, //need to pass the hashed password always
      role:role || 'user',
    })

    await newlyCreatedUser.save();

    if (newlyCreatedUser) {
      res.status(201).json({
        success: true,
        message:'user registered successfully',
        })
    }
    else {
      res.status(400).json({
        success: false,
        message:'unable to register user please try again !'
      })
    }
  }
  catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message:'some error ocurred please try again',
    })
  }
}



//login controller
const loginUser = async (req, res) => {
  try {
    // Extract user information from the request body
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user, first register to login',
      });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Password',
      });
    }

    // Create a user token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15m' }
    );

    // Send response with the access token
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      accessToken,
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Some error occurred, please try again',
    });
  }
};

module.exports = {
  registerUser,
  loginUser
};
