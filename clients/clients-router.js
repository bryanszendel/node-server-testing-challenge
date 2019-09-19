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

router.delete('/:id', (req, res) => {
  const {id} = req.params
  Clients.remove(id)
    .then(deleted => {
      res.status(200).json(deleted)
    })
    .catch(err => {
      res.status(500).json({message: 'Error removing the client.'})
    })
})

module.exports = router;