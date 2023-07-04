const request = require('supertest');
const app = require('../app');
const bcryptHashPass = require('../helpers/bcryptHashPass');
const { sequelize } = require('../models');

beforeAll(async () => {
  await sequelize.queryInterface.bulkInsert('Users',
    [{
      username: 'test1',
      password: bcryptHashPass('qwerty'),
      email: 'mail@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    , {});

});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete('Users', null, {
    truncate: true, restartIdentity: true, cascade: true
  });
})

describe('ENDPOINT /register', () => {
  describe('POST /register', () => {
    test('Register success!', async () => {

      const bodyReq = {
        username: 'ulala',
        email: 'success@mail.com',
        password: 'password'
      }

      const response = await request(app).post('/register').send(bodyReq)
      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('msg', 'Register success')
    })

    test('Register fail, no email', async () => {

      const bodyReq = {
        username: 'ulala',
        password: 'password'
      }

      const response = await request(app).post('/register').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Email field cannot be empty')
    })

    test('Register fail, no password', async () => {

      const bodyReq = {
        username: 'ulala',
        email: 'fail1@mail.com',
      }

      const response = await request(app).post('/register').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Password field cannot be empty')
    })

    test('Register fail, password less than 5 characters', async () => {

      const bodyReq = {
        username: 'ulala',
        email: 'fail1@mail.com',
        password: '1234'
      }

      const response = await request(app).post('/register').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Password must be at least 5 characters long.')
    })

    test('Register fail, empty string email', async () => {

      const bodyReq = {
        username: 'ulala',
        email: '',
        password: 'password'
      }

      const response = await request(app).post('/register').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Email field cannot be empty')
    })

    test('Register fail, empty string password', async () => {

      const bodyReq = {
        username: 'ulala',
        email: 'fail1@mail.com',
        password: ''
      }

      const response = await request(app).post('/register').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Password field cannot be empty')
    })


    test('Register fail, email already used', async () => {

      const bodyReq = {
        username: 'test1',
        email: 'mail@mail.com',
        password: 'qwerty'
      }

      const response = await request(app).post('/register').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Email already registered!')
    })

    test('Register fail, invalid email format', async () => {

      const bodyReq = {
        username: 'test1',
        email: 'mail',
        password: 'qwerty'
      }

      const response = await request(app).post('/register').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Invalid email format')
    })
  })

})
describe('ENDPOINT /login', () => {
  describe('POST /login', () => {
    test('login success!', async () => {

      const bodyReq = {
        email: 'mail@mail.com',
        password: 'qwerty'
      }

      const response = await request(app).post('/login').send(bodyReq)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('access_token', expect.any(String))
    })

    test('Register fail, no email', async () => {

      const bodyReq = {
        username: 'ulala',
        password: 'password'
      }

      const response = await request(app).post('/login').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Email and password required')
    })

    test('Register fail, no password', async () => {

      const bodyReq = {
        username: 'ulala',
        email: 'fail1@mail.com',
      }

      const response = await request(app).post('/login').send(bodyReq)
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('msg', 'Email and password required')
    })

    test('invalid email / password', async () => {

      const bodyReq = {
        email: 'mail@mail.com',
        password: 'qwertyx'
      }

      const response = await request(app).post('/login').send(bodyReq)
      expect(response.status).toBe(401)
      expect(response.body).toHaveProperty('msg', "Incorrect Email and / or Password")
    })
  })
})