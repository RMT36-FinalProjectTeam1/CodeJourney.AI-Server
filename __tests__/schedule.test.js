const request = require('supertest');
const { User, sequelize } = require('../models/index')
const app = require('../app');
const jwtSignIn = require('../helpers/jwtSignIn');
const ScheduleController = require('../controllers/scheduleController');
const { UserSchedule, Schedules, TaskDetail } = require('../models/mongoose/mongoDbSchema');
let userToken
let scheduleId
let taskId
const badTaskId = '000000000000000000000000'
const badScheduleId = '000000000000000000000000'
const badScheduleId2 = 'hahaha'
const badToken = 'alsdkfjlkajsdfl'
let deletedScheduleId
let badToken2
let insertedTaskId
beforeAll(async () => {

  await User.create({ email: 'mail@mail.com', username: 'User', password: 'qwerty' })

  userToken = jwtSignIn({ id: 1 })
  badToken2 = jwtSignIn({ id: 90 })

  const initSchedules = await UserSchedule.create({
    userId: 1,
    scheduleTitle: "Judul",
    startDate: new Date(),
    schedules: [{ task: "http request" }, { task: "Learn the basics of making an HTTP request with JavaScript" }]
  })

  const deletedSchedule = await UserSchedule.create({
    userId: 1,
    scheduleTitle: "Judul",
    startDate: new Date(),
    schedules: [{ task: "http request" }, { task: "Learn the basics of making an HTTP request with JavaScript" }]
  })

  deletedScheduleId = deletedSchedule._id
  scheduleId = initSchedules._id
  taskId = initSchedules.schedules[0]._id
  insertedTaskId = initSchedules.schedules[1]._id

  await TaskDetail.create({
    "reference": {
      "youtube": {
        "title": "4 ways to make an api call in JavaScript  | Http requests | JavaScript Tutorials",
        "link": "https://www.youtube.com/watch?v=RG-weA9HUrg"
      },
      "medium": [
        {
          "title": "How to make HTTP requests using Fetch API and Promises | by ...",
          "link": "https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444",
        },
        {
          "title": "JavaScript XMLHttpRequest — Basics | by Peter Sz | The Startup ...",
          "link": "https://medium.com/swlh/javascript-xmlhttprequest-basics-3da6f7e99dcc",
        },
        {
          "title": "Pitfalls of Promises: 5 Common Mistakes to Avoid in JavaScript ...",
          "link": "https://medium.com/gitconnected/pitfalls-of-promises-5-common-mistakes-to-avoid-in-javascript-programming-b3b3e87a7fef?source=user_profile---------0----------------------------",
        },
        {
          "title": "Curl Simplified: A Beginner's Guide for JavaScript Developers | by ...",
          "link": "https://medium.com/geekculture/curl-simplified-a-beginners-guide-for-javascript-developers-db981b77c328",
        },
        {
          "title": "How to learn JavaScript using ChatGPT-4? | by Apes Ascendance ...",
          "link": "https://medium.com/javascript-quantum/tihow-to-learn-javascript-using-chatgpt-4-4b079717bb9d?source=user_profile---------7----------------------------",
        }
      ],
      "w3schools": [
        {
          "title": "XML HttpRequest",
          "link": "https://www.w3schools.com/xml/xml_http.asp",
        },
        {
          "title": "HTTP Methods GET vs POST",
          "link": "https://www.w3schools.com/tags/ref_httpmethods.asp",
        },
        {
          "title": "AJAX Introduction",
          "link": "https://www.w3schools.com/xml/ajax_intro.asp",
        },
        {
          "title": "What is HTTP",
          "link": "https://www.w3schools.com/whatis/whatis_http.asp",
        },
        {
          "title": "JSON Introduction",
          "link": "https://www.w3schools.com/js/js_json_intro.asp",
        }
      ],
      "freecodecamp": [
        {
          "title": "Here are the most popular ways to make an HTTP request in ...",
          "link": "https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/",
        },
        {
          "title": "JavaScript Get Request – How to Make an HTTP Request in JS",
          "link": "https://www.freecodecamp.org/news/javascript-get-request-tutorial/",
        },
        {
          "title": "HTTP Networking in JavaScript – Handbook for Beginners",
          "link": "https://www.freecodecamp.org/news/http-full-course/",
        },
        {
          "title": "JavaScript Post Request – How to Send an HTTP Post Request in JS",
          "link": "https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/",
        },
        {
          "title": "HTTP Request Methods – Get vs Put vs Post Explained with Code ...",
          "link": "https://www.freecodecamp.org/news/http-request-methods-explained/",
        }
      ],
      "jst": [
        {
          "title": "XMLHttpRequest",
          "link": "https://javascript.info/xmlhttprequest",
        },
        {
          "title": "JavaScript Fetch API Explained By Examples",
          "link": "https://www.javascripttutorial.net/javascript-fetch-api/",
        },
        {
          "title": "Fetch",
          "link": "https://javascript.info/fetch",
        },
        {
          "title": "The Modern JavaScript Tutorial",
          "link": "https://javascript.info/",
        },
        {
          "title": "WebSocket",
          "link": "https://javascript.info/websocket",
        }
      ]
    },
    "title": "Learn the basics of making an HTTP request with JavaScript",
    "taskId": insertedTaskId,
    "quiz": [
      {
        "question": "What does HTTP stand for?",
        "choices": [
          "Hypertext Transfer Protocol",
          "High Transferability Protocol",
          "Hypertext Transfer Path",
          "Hypertext Transport Protocol"
        ],
        "answer": 0,
      },
      {
        "question": "What is the default port used for HTTP?",
        "choices": [
          "80",
          "2121",
          "443",
          "8080"
        ],
        "answer": 0,
      },
      {
        "question": "Which of the following is an example of an HTTP request?",
        "choices": [
          "GET / HTTP/1.1",
          "POST / HTTP/1.1",
          "GET /www.example.com/index.html HTTP/1.1",
          "POST /www.example.com/index.html HTTP/1.1"
        ],
        "answer": 2,
      },
      {
        "question": "Which of the following can be used to make an HTTP request with JavaScript?",
        "choices": [
          "XMLHttpRequest",
          "Document Object Model",
          "JSON Parser",
          "Node.js"
        ],
        "answer": 0,
      },
      {
        "question": "Which of the following is not a valid HTTP response status code?",
        "choices": [
          "200 OK",
          "304 Not Modified",
          "400 Bad Request",
          "500 Internal Server Error"
        ],
        "answer": 3,
      }
    ],
  })

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
  TaskDetail.collection.drop()
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
        .set("webtoken", userToken)
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
        .set("webtoken", userToken)
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
        .set("webtoken", userToken)
      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('msg', 'Schedule successfully created!')
    })

    test('Failed create schedule', async () => {

      const bodyReq = {
        tasks: [{ task: 'tidur berbaring' }],
        title: undefined,
      }
      // Replace the original handler with the mock function

      const response = await request(app)
        .post('/schedules')
        .send(bodyReq)
        .set("webtoken", userToken)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Invalid input')
    })
  })

  describe('GET /schedules', () => {
    test('Success get schedules', async () => {

      const response = await request(app)
        .get('/schedules')
        .set("webtoken", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toBeInstanceOf(Array)
      expect(response.body[0]).toHaveProperty("schedules", expect.any(Array))
    })

    test('Bad token', async () => {

      const response = await request(app)
        .get('/schedules')
        .set("webtoken", badToken)
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty("msg", expect.any(String))
    })

    test('valid token no user', async () => {

      const response = await request(app)
        .get('/schedules')
        .set("webtoken", badToken2)
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
        .set("webtoken", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('schedules', expect.any(Array))
      expect(response.body).toHaveProperty('scheduleTitle', expect.any(String))
      expect(response.body.schedules[0]).toHaveProperty('task', expect.any(String))
    })

    test('Failed get schedule by Id invalid Id', async () => {
      // Replace the original handler with the mock function
      const response = await request(app)
        .get('/schedules/' + badScheduleId)
        .set("webtoken", userToken)
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('msg', 'Schedule not found')
    })

    test('Failed get schedule by Id invalid Id', async () => {
      // Replace the original handler with the mock function
      const response = await request(app)
        .get('/schedules/' + badScheduleId2)
        .set("webtoken", userToken)
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('msg', 'id not found')
    })
  })

  describe('patch /schedules/:scheduleId', () => {
    test('Success update task schedule by id', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .patch('/schedules/' + scheduleId)
        .send({ taskId })
        .set("webtoken", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('msg', expect.any(String))
    })

    test('failed update task schedule by id schedule id not found', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .patch('/schedules/' + badScheduleId)
        .send({ taskId: badTaskId })
        .set("webtoken", userToken)
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('msg', 'Schedule not found')
    })
    test('failed update task schedule by id task id not found', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .patch('/schedules/' + scheduleId)
        .send({ taskId: badTaskId })
        .set("webtoken", userToken)
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('msg', 'Task not found')
    })
  })

  describe('delete /schedules/:scheduleId', () => {
    test('Success delete schedule by id', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .delete('/schedules/' + deletedScheduleId)
        .set("webtoken", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('msg', expect.any(String))
    })

    test('failed delete schedule by id schedule id not found', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .delete('/schedules/' + badScheduleId)
        .set("webtoken", userToken)
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('msg', 'Schedule not found')
    })
  })

  describe('get /recommended', () => {
    test('Success get schedule by Id', async () => {
      // Replace the original handler with the mock function

      const response = await request(app)
        .get('/recommended')
        .set("webtoken", userToken)
      expect(response.status).toBe(200)
      expect(response.body).toBeInstanceOf(Array)
      expect(response.body[0]).toHaveProperty('title', expect.any(String))
      expect(response.body[0].schedules[0]).toHaveProperty('task', expect.any(String))
    })
  })


})

describe('ENDPOINT /schedules/:scheduleId/:taskId', () => {
  describe('GET /schedules/:scheduleId/:taskId', () => {
    test('success create and get new detail tasks', async () => {
      const response = await request(app)
        .get(`/schedules/${scheduleId}/${taskId}`)
        .set("webtoken", userToken)

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('reference', expect.any(Object))
      expect(response.body).toHaveProperty('title', expect.any(String))
      expect(response.body).toHaveProperty('quiz', expect.any(Array))
      expect(response.body.reference).toHaveProperty('youtube', expect.any(Object))
      expect(response.body.reference).toHaveProperty('medium', expect.any(Array))
      expect(response.body.reference).toHaveProperty('w3schools', expect.any(Array))
      expect(response.body.reference).toHaveProperty('freecodecamp', expect.any(Array))
      expect(response.body.reference).toHaveProperty('jst', expect.any(Array))
      expect(response.body.quiz[0]).toHaveProperty('choices', expect.any(Array))
      expect(response.body.quiz[0]).toHaveProperty('question', expect.any(String))
      expect(response.body.quiz[0].choices).toHaveLength(4)
    })

    test('success get generated detail tasks from mongodb', async () => {
      const response = await request(app)
        .get(`/schedules/${scheduleId}/${insertedTaskId}`)
        .set("webtoken", userToken)

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('reference', expect.any(Object))
      expect(response.body).toHaveProperty('title', expect.any(String))
      expect(response.body).toHaveProperty('quiz', expect.any(Array))
      expect(response.body.reference).toHaveProperty('youtube', expect.any(Object))
      expect(response.body.reference).toHaveProperty('medium', expect.any(Array))
      expect(response.body.reference).toHaveProperty('w3schools', expect.any(Array))
      expect(response.body.reference).toHaveProperty('freecodecamp', expect.any(Array))
      expect(response.body.reference).toHaveProperty('jst', expect.any(Array))
      expect(response.body.quiz[0]).toHaveProperty('choices', expect.any(Array))
      expect(response.body.quiz[0]).toHaveProperty('question', expect.any(String))
      expect(response.body.quiz[0].choices).toHaveLength(4)
    })

    test('failed get generated detail tasks schedule id not found', async () => {
      const response = await request(app)
        .get(`/schedules/${badScheduleId}/${badTaskId}`)
        .set("webtoken", userToken)

      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('msg', 'Schedule not found')
    })

    test('failed get generated detail tasks schedule id not found', async () => {
      const response = await request(app)
        .get(`/schedules/${scheduleId}/${badTaskId}`)
        .set("webtoken", userToken)

      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('msg', 'Task not found')
    })
  })
})