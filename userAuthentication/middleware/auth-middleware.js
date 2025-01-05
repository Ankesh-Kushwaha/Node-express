const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('Authorization Header:', authHeader);

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied! No token provided.',
    });
  }
 
  try {
    //decode the token and get the user information from the token
    const decodedInformation = jwt.verify(token, process.env.JWT_SECRET_KEY);//verifying the user token
    console.log('Decoded Information:', decodedInformation);
    req.userInfo = decodedInformation; //storing the user information in the request object
    next();//if the token is verified then the user will be able to access the home page
  }
  catch (e) {
    res.status(500).json({
      susscess: false,
      message:'some error ocurred please try again',
     })
  }
};

  module.exports = authMiddleware;