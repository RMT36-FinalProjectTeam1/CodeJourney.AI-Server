const bcrypt = require('bcryptjs');

module.exports = (password,hashPass) => {
  return bcrypt.compareSync(password,hashPass)
}