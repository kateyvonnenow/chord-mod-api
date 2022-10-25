// middleware functions are functions that:
// * we pass into `app.use`
// * take 3 parameters: req, res, next

function logger(req, res, next) {
  console.log(`${new Date()} ${req.method} ${req.path}`)

  // next() calls the next function in middleware to run
  next()
}

module.exports = logger