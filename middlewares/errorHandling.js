const { JsonWebTokenError } = require('jsonwebtoken');
const { MongooseError } = require('mongoose');
const { ValidationError, UniqueConstraintError } = require("sequelize")

module.exports = (err, req, res, next) => {
  console.log(err)

  let status = err.status || 500
  let msg = err.msg || "Internal Server Error"

  if (err instanceof ValidationError) {
    status = 400
    msg = err.errors[0].message
  }

  if (err instanceof UniqueConstraintError) {
    status = 400
    msg = 'Email already registered!'
  }

  if (err instanceof JsonWebTokenError) {
    status = 401
    msg = "Invalid Token"
  }

  if (err instanceof MongooseError) {
    status = 404
    msg = "id not found"
  }
  res.status(status).json({ msg })
}