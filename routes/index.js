const express = require('express');
const UserController = require('../controllers/userController');
const errorHandling = require('../middlewares/errorHandling');
const router = express.Router()

router
  .get("/", (req, res) => {
    res.send("Hello World")
  })
  .post("/register",UserController.register)
  .post("/login", UserController.login)
  .use(errorHandling)
  // .use("/path", require('./path'))

module.exports = router;