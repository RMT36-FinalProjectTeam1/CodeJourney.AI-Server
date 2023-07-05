const jwtDecode = require("../helpers/jwtDecode")
const { User } = require("../models")
module.exports = async (req, res, next) => {
  try {
    const access_token = req.headers.access_token
    const payload = jwtDecode(access_token)
    const user = await User.findByPk(payload.id)
    if (!user) {
      throw { status: 401, errMsg: 'Invalid Token' }
    }
    req.user = {
      id: user.id,
      username: user.username
    }
    next()
  } catch (err) {
    next(err)
  }
}