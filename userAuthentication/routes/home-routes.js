const express = require('express');
const { route } = require('./auth-routes');
const authMiddleware=require('../middleware/auth-middleware')

const router = express.Router();


//untile the authMiddleware is not called the user will not be able to access the home page
router.get('/welcome', authMiddleware, (req, res) => {
  const { username, role, userId } = req.userInfo;
  res.json({
    success: true,
    message: 'welcome to the home page',
    user: {
      _id: userId,
      username,
      role,
    }
   })
})


module.exports = router;