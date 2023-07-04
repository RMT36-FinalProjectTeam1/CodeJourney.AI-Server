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

const UserSchedule = mongoose.model('UserSchedules', userScheduleSchema)
const Schedules = mongoose.model('Schedules', schedulesSchema)

module.exports = { UserSchedule, Schedules }