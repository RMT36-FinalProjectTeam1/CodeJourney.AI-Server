const mongoose = require('mongoose');
const { Schema } = mongoose
mongoose.connect(process.env.MONGODB_URI);
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

const UserSchedule = mongoose.model('UserSchedules', userScheduleSchema)
const Schedules = mongoose.model('Schedules', schedulesSchema)

module.exports = { UserSchedule, Schedules }