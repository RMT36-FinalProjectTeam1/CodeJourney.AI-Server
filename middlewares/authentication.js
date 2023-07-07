const jwtDecode = require("../helpers/jwtDecode")
const { User } = require("../models")
module.exports = async (req, res, next) => {
  try {
    const webtoken = req.headers.webtoken
    const payload = jwtDecode(webtoken)
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