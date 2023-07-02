const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
module.exports = (token) => {
  return jwt.verify(token, JWT_SECRET);
}