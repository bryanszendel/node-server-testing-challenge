const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Clients = require('../clients/clients-model.js');
const secrets = require('../config/secrets.js')

router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash;

  Clients.add(user)
    .then(client => {
      const token = generateToken(user)
      res.status(201).json(client, token)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error adding the client.' })
    })
})

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  Clients.find(client)
    .then(client => {
      res.status(200).json(client)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error adding the client.' })
    })
})

function generateToken(user) {
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;