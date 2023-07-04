const express = require('express');
const UserController = require('../controllers/userController');
const errorHandling = require('../middlewares/errorHandling');
const authentication = require('../middlewares/authentication');
const ScheduleController = require('../controllers/scheduleController');
const router = express.Router()

router
  .post("/register",UserController.register)
  .post("/login", UserController.login)
  .use(authentication)
  .post("/generatecustomtask", ScheduleController.generateCustomTasks)
  .post("/schedules", ScheduleController.createSchedule)
  .get("/schedules", ScheduleController.getAllUserSchedules)
  .get("/schedules/:scheduleId",ScheduleController.getUserSchedulesById)
  .patch("/schedules/:scheduleId",ScheduleController.updateCompleteTask)
  .delete("/schedules/:scheduleId", ScheduleController.deleteUserSchedulesById)
  // .post("/recommended",ScheduleController.createRecommendedSchedule)
  .get("/recommended",ScheduleController.getAllRecomendedSchedule)
  .use(errorHandling)
  // .post("/test",ScheduleController.test)

module.exports = router;