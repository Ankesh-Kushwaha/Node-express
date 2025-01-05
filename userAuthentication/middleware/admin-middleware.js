

const isAdminUser = (req, res, next) => {
  if (req.userInfo.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Access denied! Only admin can access this page',
    });
  }
  next(); // Call next() to pass control to the next middleware
};

module.exports = isAdminUser;
