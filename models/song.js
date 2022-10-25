const db = require('../db/db')

const Song = {
  findAll: () => {
    const sql = 'SELECT * FROM songs'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  // create: (name, clue, address) => {
  //   const sql = `
  //     INSERT INTO songs(name, clue, address)
  //     VALUES ($1, $2, $3) 
  //     RETURNING * 
  //   `

  //   return db 
  //     .query(sql, [name, clue, address])
  //     .then(dbRes => dbRes.rows[0])
  // },

  // delete: SongId => {
  //   const sql = `
  //     DELETE FROM songs WHERE id = $1
  //   `

  //   return db.query(sql, [SongId])
  // }
}

module.exports = Song