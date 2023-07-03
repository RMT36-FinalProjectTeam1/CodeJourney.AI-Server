const request = require('supertest');
const app = require('../app');

describe('ENDPOINT /generatecustomtask', () => {
  describe('POST /generatecustomtask', () => {
    test('Success create task list', async () => {

      const bodyReq = {
        prompt: 'http request',
      }

      const response = await request(app).post('/generatecustomtask').send(bodyReq)
      expect(response.status).toBe(200)
      expect(response.body[0]).toHaveProperty('task', expect.any(String))
    })

    test('Failed create task list', async () => {

      const bodyReq = {
        prompt: 'http request python',
      }

      const response = await request(app).post('/generatecustomtask').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', expect.any(String))
    })

  })
})