const request = require('supertest');

const server = require('../api/server.js');

describe('server.js', () => {
  describe('GET /api/clients', () => {
    it('returns 200 OK', () => {
      return request(server).get('/api/clients').then(res => {
        expect(res.status).toBe(200)
      })
      
    })

  })

})