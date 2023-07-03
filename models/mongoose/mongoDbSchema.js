const mongoose = require('mongoose');
const { Schema } = mongoose
mongoose.connect(process.env.MONGODB_URI);
const userScheduleSchema = new Schema({
  userId: Number, // String is shorthand for {type: String}
  startDate: Date,
  scedules: [{
    task: String,
    complete: Boolean
  }]
});

const UserSchedule = mongoose.model('UserSchedules', userScheduleSchema)

module.exports = { UserSchedule }