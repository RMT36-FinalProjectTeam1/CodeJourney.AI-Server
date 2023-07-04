const mongoose = require('mongoose');
const { Schema } = mongoose
let mongoUri
if (process.env.NODE_ENV == 'test') {
  mongoUri = process.env.MONGODB_URI_TEST
} else {
  mongoUri = process.env.MONGODB_URI
}
mongoose.connect(mongoUri);
const userScheduleSchema = new Schema({
  userId: Number, // String is shorthand for {type: String}
  scheduleTitle: String,
  startDate: Date,
  schedules: [{
    task: String,
    complete: Boolean
  }]
});

const schedulesSchema = new Schema({
  title: String,
  schedules: [{
    task: String
  }]
})

const taskDetailSchema = new Schema({
  title: String,
  taskId: mongoose.ObjectId,
  reference: {
    medium: [{ title: String, link: String }],
    w3schools: [{ title: String, link: String }],
    freecodecamp: [{ title: String, link: String }],
    jst: [{ title: String, link: String }],
    youtube: { title: String, link: String },
  },
  quiz: [{ question: String, choices: [String], answer: Number }]
})

const UserSchedule = mongoose.model('UserSchedules', userScheduleSchema)
const Schedules = mongoose.model('Schedules', schedulesSchema)
const TaskDetail = mongoose.model('taskdetail', taskDetailSchema)

module.exports = { UserSchedule, Schedules,TaskDetail }