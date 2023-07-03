const express = require('express');
const UserController = require('../controllers/userController');
const errorHandling = require('../middlewares/errorHandling');
const authentication = require('../middlewares/authentication');
const ScheduleController = require('../controllers/scheduleController');
const router = express.Router()

router
  .get("/", (req, res) => {
    res.send("Hello World")
  })
  .post("/register",UserController.register)
  .post("/login", UserController.login)
  .post("/generatecustomtask", ScheduleController.generateCustomTasks)
  .use(authentication)
  .post("/scedules")
  .post("/test",ScheduleController.test)
  .use(errorHandling)
  // .use("/path", require('./path'))

module.exports = router;