const router = require('express').Router();

const Clients = require('../clients/clients-model.js');

router.get('/', (req, res) => {
  Clients.find()
    .then(clients => {
      res.status(200).json(clients)
    })
    .catch(err => {
      res.status(500).json({ message: 'error retrieving the clients.' })
    })
})

module.exports = router;