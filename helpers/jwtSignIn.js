const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
module.exports = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
}