const openAiApi = require("../helpers/openAiApi")
const { UserSchedule } = require('../models/mongoose/mongoDbSchema')

function modifyString(inputString) {
  // Remove extra newlines and leading/trailing spaces
  // Remove extra newlines and leading/trailing spaces
  let modifiedString = inputString.trim().replace(/\n+/g, '');

  // Add double quotes around property names
  modifiedString = modifiedString.replace(/(\w+):/g, '"$1":');

  return modifiedString;
}

class ScheduleController {
  static async generateCustomTasks(req, res, next) {
    try {
      const { prompt } = req.body
      const validate = await openAiApi(`is ${prompt} can be learn in javascript? answer in boolean only `)
      if (validate.toLowerCase().includes('no')) {
        throw { status: 400, msg: `${prompt} is not in javascript scope` }
      }
      const tasks = await openAiApi(`${prompt} in javascript learning roadmap, give me response in json format like this:[{task:""},{task:""}]`)
      res.status(200).json(JSON.parse(modifyString(tasks)))
    } catch (err) {
      next(err)
    }
  }

  static async test(req, res, next) {
    try {
      await UserSchedule.create({
        userId: 1, // String is shorthand for {type: String}
        author: "saya",
        startDate: Date.now(),
        scedules: [{
          task: "String",
          complete: false
        }]
      })
      res.status(200).json({ msg: 'success' })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ScheduleController