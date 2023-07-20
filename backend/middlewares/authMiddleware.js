// const jwt = require('jsonwebtoken');

// // Middleware to verify token and protect routes
// exports.protect = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ error: 'Authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;

//     if (req.user.role !== 'admin') {
//       return res.status(403).json({ error: 'Forbidden: Only admin can access this route' });
//     }

//     next();
//   } catch (error) {
//     console.error('Error verifying token:', error);
//     res.status(401).json({ error: 'Token is not valid' });
//   }
// };








const jwt = require('jsonwebtoken');

// Middleware to verify token and protect routes
exports.protect = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {a
    console.error('Error verifying token:', error);
    res.status(401).json({ error: 'Token is not valid' });
  }
};
