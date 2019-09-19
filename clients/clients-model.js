const db = require('../database/db-config.js');

module.exports = {
  find,
  add,
  findById,
  remove,
}

function find() {
  return db('clients')
}

function findById(filter) {
  return db('clients').where(filter)
}

async function add(user) {
  return db('clients').insert(user, 'id')
}

function remove(id) {
  return db('clients').delete().where({id: id})
}