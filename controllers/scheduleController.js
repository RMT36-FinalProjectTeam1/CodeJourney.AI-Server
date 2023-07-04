const openAiApi = require("../helpers/openAiApi");
const { UserSchedule, Schedules } = require("../models/mongoose/mongoDbSchema");
const references = require("../helpers/references");

function modifyString(inputString) {
  // Remove extra newlines and leading/trailing spaces
  let modifiedString = inputString.trim().replace(/\n+/g, "");

  // Add double quotes around property names
  modifiedString = modifiedString.replace(/(\w+):/g, '"$1":');

  return modifiedString;
}

class ScheduleController {
  static async generateCustomTasks(req, res, next) {
    try {
      const { prompt } = req.body;
      const validate = await openAiApi(
        `is ${prompt} can be learn in javascript? answer in boolean only `
      );
      if (
        validate.toLowerCase().includes("no") ||
        validate.toLowerCase().includes("false")
      ) {
        throw { status: 400, msg: `${prompt} is not in javascript scope` };
      }
      const tasks = await openAiApi(
        `${prompt} in javascript learning roadmap, give me response in json format like this:[{task:""},{task:""}]`
      );
      res
        .status(200)
        .json({ title: prompt, tasks: JSON.parse(modifyString(tasks)) });
    } catch (err) {
      next(err);
    }
  }

  static async createSchedule(req, res, next) {
    try {
      const { tasks, startDate, title } = req.body;
      const userId = req.user.id;
      tasks.forEach((el) => {
        el.complete = false;
      });
      await UserSchedule.create({
        userId,
        scheduleTitle: title,
        startDate: new Date(startDate),
        schedules: tasks,
      });
      res.status(201).json({ msg: "Schedule successfully created!" });
    } catch (err) {
      next(err);
    }
  }

  static async getAllUserSchedules(req, res, next) {
    try {
      const userId = req.user.id;
      const schedules = await UserSchedule.find({ userId });
      res.status(200).json(schedules);
    } catch (err) {
      next(err);
    }
  }

  static async getUserSchedulesById(req, res, next) {
    try {
      const scheduleId = req.params.scheduleId;
      const schedule = await UserSchedule.findById(scheduleId);
      res.status(200).json(schedule);
    } catch (err) {
      next(err);
    }
  }

  static async detailTaskById(req, res, next) {
    try {
      const taskId = req.params.taskId;

      const userId = req.user.id;
      const schedules = await UserSchedule.find({ userId });

      let taskTitle;
      schedules.forEach((el) => {
        el.schedules.forEach((task) => {
          if (taskId == task._id) {
            taskTitle = task.task;
          }
        });
      });

      //references
      let ref = {};

      //fill variable with [title and link]
      let medium = await references(`${taskTitle}`, "medium");
      if (medium) {
        ref.medium = medium;
      }
      let w3schools = await references(`${taskTitle}`, "w3schools");
      if (w3schools) {
        ref.w3schools = w3schools;
      }
      let freecodecamp = await references(`${taskTitle}`, "freecodecamp");
      if (freecodecamp) {
        ref.freecodecamp = freecodecamp;
      }
      let jst = await references(`${taskTitle}`, "jst");
      if (jst) {
        ref.jst = jst;
      }

      // fill quiz with generated array of object
      const prompt = `make 5 quizzes for ${taskTitle} multiple choices, response me in json format in array "
      [{
        "question":"",
        "choices":["",""],
        "answer":choicesIndex
      },{
        "question":"",
        "choices":["",""],
        "answer":choicesIndex
      }]"
      `;
      let quizString = await openAiApi(`${prompt}`);
      console.log(quizString);
      let quiz = JSON.parse(`${quizString}`);

      const result = {
        taskId: taskId,
        title: taskTitle,
        reference: ref,
        quiz: quiz,
      };
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async updateCompleteTask(req, res, next) {
    try {
      const scheduleId = req.params.scheduleId;
      const { taskId } = req.body;
      const schedule = await UserSchedule.findById(scheduleId);
      schedule.schedules.forEach((el) => {
        if (el._id == taskId) el.complete = true;
      });
      await UserSchedule.findByIdAndUpdate(scheduleId, schedule);
      res.status(200).json({ msg: "Task successfully updated" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteUserSchedulesById(req, res, next) {
    try {
      const scheduleId = req.params.scheduleId;
      const schedule = await UserSchedule.findByIdAndDelete(scheduleId);
      res.status(200).json({
        msg: `Success delete schedule with title : ${schedule.title}`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async createRecommendedSchedule(req, res, next) {
    try {
      const { title, schedules } = req.body;
      await Schedules.create({
        title,
        schedules,
      });
      res.status(201).json({ msg: "Success" });
    } catch (err) {
      next(err);
    }
  }

  static async getAllRecomendedSchedule(req, res, next) {
    try {
      const schedules = await Schedules.find();
      res.status(200).json(schedules);
    } catch (err) {
      next(err);
    }
  }
  // static async test(req, res, next) {
  //   try {
  //     await UserSchedule.create({
  //       userId: 1, // String is shorthand for {type: String}
  //       author: "saya",
  //       startDate: Date.now(),
  //       scedules: [{
  //         task: "String",
  //         complete: false
  //       }]
  //     })
  //     res.status(200).json({ msg: 'success' })
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}

module.exports = ScheduleController;
