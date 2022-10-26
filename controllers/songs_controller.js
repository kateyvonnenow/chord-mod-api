const express = require('express')
const router = express.Router()


// models
const Song = require('../models/song')

// routes
// read
router.get('/', (req, res) => {
  Song
    .findAll()
    .then(songs => res.json(songs))
})

router.get('/:id', (req, res) => {
  const Songid = req.params.id
  Song
    .find(Songid)
    .then(songs => res.json(songs))
})

// create
router.post('/', (req, res) => {
  const { title, artist, lyrics, chords } = req.body
  const user_id = 1

  Song
    .create(title, artist, lyrics, chords, user_id)
    .then(Song => res.json(Song))
}) 

// edit/update
router.get('/:id/edit', (req, res) => {
  const songId = req.params.id

  Song
    .find(songId)
    .then(song  => res.json(song))
})

router.put('/:id', (req, res) => {
  const { title, artist, lyrics, chords } = req.body
  const songId = req.params.id
  Song
    .update(songId, title, artist, lyrics, chords)
    .then(updatedSong => res.json(updatedSong))
})

router.delete('/:id', (req, res) => {
  const songId = req.params.id

  Song
    .delete(songId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router