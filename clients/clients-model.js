const db = require('../database/db-config.js');

module.exports = {
  find,
  add,
  remove,
}

function find() {
  return db('clients')
}

function add() {

}

function remove() {

}