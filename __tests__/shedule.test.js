const request = require('supertest');
const { User, sequelize } = require('../models/index')
const app = require('../app');
const jwtSignIn = require('../helpers/jwtSignIn');
const ScheduleController = require('../controllers/scheduleController');
const { UserSchedule, Schedules } = require('../models/mongoose/mongoDbSchema');
let userToken
let scheduleId
let taskId
let badToken = 'alsdkfjlkajsdfl'
let badToken2
beforeAll(async () => {

  await User.create({ email: 'mail@mail.com', username: 'User', password: 'qwerty' })

  userToken = jwtSignIn({ id: 1 })
  badToken2 = jwtSignIn({ id: 90 })
  


  const initSchedules = await UserSchedule.create({
    userId: 1,
    scheduleTitle: "Judul",
    startDate: new Date(),
    schedules: [{ task: "Mandi sore" }]
  })

  scheduleId = initSchedules._id
  taskId = initSchedules.schedules[0]._id

  await Schedules.create({
    title: 'RECOMENDED',
    schedules: [{ task: "tidur siang" }]
  })
});

beforeEach(() => {
  jest.restoreAllMocks();
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete('Users', null, {
    truncate: true, restartIdentity: true, cascade: true
  });
  UserSchedule.collection.drop()
  Schedules.collection.drop()
})


describe('ENDPOINT /generatecustomtask', () => {
  describe('POST /generatecustomtask', () => {
    test('Success create task list', async () => {

      // // Spy on the generateCustomTasks method
      // const spy = jest.spyOn(ScheduleController, 'generateCustomTasks').mockImplementation(mockGenerateCustomTasks);
      // ScheduleController.generateCustomTasks = mockGenerateCustomTasks
      const bodyReq = {
        prompt: 'http request',
      }
      // Replace the original handler with the mock function

      const response = await request(app)
        .post('/generatecustomtask')
        .send(bodyReq)
        .set("access_token", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('title', expect.any(String))
      expect(response.body).toHaveProperty('tasks', expect.any(Array))
      expect(response.body.tasks[0]).toHaveProperty('task', expect.any(String))
    })

    test('Failed create task list', async () => {

      const bodyReq = {
        prompt: 'http request python',
      }

      const response = await request(app)
        .post('/generatecustomtask').send(bodyReq)
        .set("access_token", userToken)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', expect.any(String))
    })

  })
})

describe('ENDPOINT /schedules', () => {
  describe('POST /schedules', () => {
    test('Success create schedule', async () => {

      const bodyReq = {
        tasks: [{ task: 'tidur berbaring' }],
        title: 'tidur siang',
        startDate: '06/06/2022'
      }
      // Replace the original handler with the mock function

      const response = await request(app)
        .post('/schedules')
        .send(bodyReq)
        .set("access_token", userToken)
      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('msg', 'Schedule successfully created!')
    })
  })

  describe('GET /schedules', () => {
    test('Success get schedules', async () => {

      const response = await request(app)
        .get('/schedules')
        .set("access_token", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toBeInstanceOf(Array)
      expect(response.body[0]).toHaveProperty("schedules", expect.any(Array))
    })

    test('Bad token', async () => {

      const response = await request(app)
        .get('/schedules')
        .set("access_token", badToken)
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty("msg", expect.any(String))
    })

    test('valid token no user', async () => {

      const response = await request(app)
        .get('/schedules')
        .set("access_token", badToken2)
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty("msg", expect.any(String))
    })
  })



})

describe('ENDPOINT /schedules/:scheduleId', () => {
  describe('get /schedules/:scheduleId', () => {
    test('Success get schedule by Id', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .get('/schedules/' + scheduleId)
        .set("access_token", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('schedules', expect.any(Array))
      expect(response.body).toHaveProperty('scheduleTitle', expect.any(String))
      expect(response.body.schedules[0]).toHaveProperty('task', expect.any(String))
    })
  })

  describe('patch /schedules/:scheduleId', () => {
    test('Success update task schedule by id', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .patch('/schedules/' + scheduleId)
        .send({ taskId })
        .set("access_token", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('msg', expect.any(String))
    })
  })

  describe('delete /schedules/:scheduleId', () => {
    test('Success delete schedule by id', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .delete('/schedules/' + scheduleId)
        .set("access_token", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('msg', expect.any(String))
    })
  })

  describe('get /recommended', () => {
    test('Success get schedule by Id', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .get('/recommended')
        .set("access_token", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toBeInstanceOf(Array)
      expect(response.body[0]).toHaveProperty('title', expect.any(String))
      expect(response.body[0].schedules[0]).toHaveProperty('task', expect.any(String))
    })
  })

})