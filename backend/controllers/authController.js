// const jwt = require('jsonwebtoken');

// exports.protect = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ error: 'Authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;

//     // Check if the user role is 'admin', only allow access to admin users
//     if (req.user.role !== 'admin') {
//       return res.status(403).json({ error: 'Access forbidden' });
//     }

//     next();
//   } catch (error) {
//     console.error('Error verifying token:', error);
//     res.status(401).json({ error: 'Token is not valid' });
//   }
// };















// Login user
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Perform simple validation check here
    // Replace this with your own authentication logic
    // For example, you can check if the username and password are not empty

    if (username === 'admin' && password === 'admin') {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Server error' });
  }
};














// const jwt = require('jsonwebtoken');

// // Login user
// exports.loginUser = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Perform authentication check here
//     // Replace this with your own authentication logic
//     // For example, you can check if the username and password match a user in the database

//     if (username === 'admin' && password === 'admin') {
//       // Create payload for the token
//       const payload = {
//         user: {
//           username,
//           role: 'admin',
//         },
//       };

//       // Generate and return the token
//       jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (error, token) => {
//         if (error) throw error;
//         res.json({ token });
//       });
//     } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
