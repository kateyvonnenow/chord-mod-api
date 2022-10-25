const express = require('express')
const router = express.Router()


// models
const Song = require('../models/song')

// routes
router.get('/', (req, res) => {
  Song
    .findAll()
    .then(songs => res.json(songs))
})

// router.post('/', (req, res) => {
//   const name = req.body.name
//   const clue = req.body.clue
//   const address = req.body.address

//   Song
//     .create(name, clue, address)
//     .then(Song => res.json(Song))
// }) 

// router.delete('/:id', (req, res) => {
//   const SongId = req.params.id

//   Song
//     .delete(SongId)
//     .then(() => res.json({ message: 'deleted successfully' }))
// })

module.exports = router