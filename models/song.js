const db = require('../db/db')

const Song = {
  findAll: () => {
    const sql = 'SELECT * FROM songs'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  findAllByUserId: (userId) => {
    const sql = `
      SELECT * FROM songs WHERE user_id = $1
    `
    
    return db
      .query(sql, [userId])
      .then(dbRes => dbRes.rows)
  },

  find: (songId) => {
    const sql = `
      SELECT * FROM songs WHERE id = $1
    `
    
    return db
      .query(sql, [songId])
      .then(dbRes => dbRes.rows[0])
  },

  create: (title, artist, lyrics, chords, user_id) => {
    const sql = `
      INSERT INTO songs(title, artist, lyrics, chords, user_id)
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING * 
    `

    return db 
      .query(sql, [title, artist, lyrics, chords, user_id])
      .then(dbRes => dbRes.rows[0])
  },

  update: (id, title, artist, lyrics, chords) => {
    const sql = `
      UPDATE songs 
      SET
        title = $2,
        artist = $3,
        lyrics = $4,
        chords = $5
      WHERE
        id = $1
      RETURNING * 
    `

    console.log(`${title} by ${artist} has been updated`)
    return db 
      .query(sql, [id, title, artist, lyrics, chords])
      .then(dbRes => dbRes.rows[0])
  },

  // delete: SongId => {
  //   const sql = `
  //     DELETE FROM songs WHERE id = $1
  //   `

  //   return db.query(sql, [SongId])
  // }
}

module.exports = Song