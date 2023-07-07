const bcryptComparePass = require("../helpers/bcryptComparePass");
const jwtSignIn = require("../helpers/jwtSignIn")
const { User } = require("../models")
// const { OAuth2Client } = require('google-auth-library');

class UserController {
  static async register(req, res, next) {
    try {
      let { password, email, username } = req.body
      const newUser = await User.create({ password, email, username })
      res.status(201).json({
        msg: "Register success",
        newUser: {
          id: newUser.id,
          email: newUser.email
        }
      })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        throw { status: 400, msg: "Email and password required" }
      }
      const user = await User.findOne({ where: { email } })
      if (!user || !bcryptComparePass(password, user.password)) {
        throw { status: 401, msg: "Incorrect Email and / or Password" }
      }
      const token = jwtSignIn({ id: user.id })
      res.status(200).json({
        webtoken: token,
        id: user.id,
        username: user.username,
      })
    } catch (err) {
      next(err)
    }
  }

  // static async googleSignIn(req, res, next) {
  //   try {
  //     const { google_token } = req.headers

  //     const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  //     const ticket = await client.verifyIdToken({
  //       idToken: google_token,
  //       audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
  //       // Or, if multiple clients access the backend:
  //       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  //     });
  //     const payload = ticket.getPayload();
  //     let user = await User.findOne({ where: { email: payload.email } })
  //     const role = req.originalUrl.includes('pub') ? 'Customer' : 'Staff'
  //     if (!user) {
  //       const newUser = {
  //         username: payload.name,
  //         email: payload.email,
  //         password: String(Math.random()),
  //         role
  //       }
  //       user = await User.create(newUser)
  //     }

  //     const jwtToken = jwtSignIn({ id: user.id })
  //     res.status(200).json({
  //       msg: "Success login using Google account",
  //       webtoken: jwtToken,
  //       id: user.id,
  //       role: user.role,
  //       username: user.username
  //     })

  //   } catch (err) {
  //     next(err)
  //   }

  // }


}

module.exports = UserController