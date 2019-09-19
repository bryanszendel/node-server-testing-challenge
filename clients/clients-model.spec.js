const request = require('supertest');
const db = require('../database/db-config.js')
const Clients = require('./clients-model.js')

const server = require('../api/server.js');

describe('server.js', () => {

  beforeEach(async () => {
    await db('clients').truncate();
  })

  describe('GET /api/clients', () => {
    it('returns 200 OK', () => {
      return request(server).get('/api/clients').then(res => {
        expect(res.status).toBe(200)
      })
    })
    it('returns JSON', () => {
      return request(server).get('/api/clients').then(res => {
        expect(res.type).toMatch(/json/i)
      })
    
    })

  })

  describe('POST /auth/register', async () => {
    it('saves to DB', async () => {
      await Clients.add({username: 'bryan', password: 'pass'})
      let clients =  await db('clients')
        expect(clients).toHaveLength(1);
    })
    it("returns {username: 'bryan'}", async () => {
      const [id] = await Clients.add({username: 'bryan', password: 'pass'})
      let client = await db('clients').where({id}).first()
        expect(client.username).toBe('bryan')
      
    })
  })

  describe('DELETE /api/clients', async () => {
    it('deletes from DB', async () => {
      const id = 1
      await Clients.remove(id)
      let clients =  await db('clients')
        expect(clients).toHaveLength(0);
    })
    it('returns 200 OK', () => {
      return request(server).delete('/api/clients/1').then(res => {
        expect(res.status).toBe(200)
      })
    })
  })

})