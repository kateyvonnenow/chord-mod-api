const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;

// middlewares
const logger = require('./middlewares/logger')

// controllers
const songsController = require('./controllers/songs_controller')


// start the web server
app.listen(PORT,
  () => console.log(`server listening to port ${PORT}`)
)

// workflow of express: starts from receiving a user request and ends with providing a response.
// Each step in the workflow is a middleware function passed into 'app.use'. 

// receive request (from browser)
//      |
//      V
// middleware function to log request info in the terminal
app.use(logger)
//      |
//      V
// middleware function to send back our SPA (Single-Page_application)
// app.use(express.static('client')) //'client' did the request make for '/' 
//      |
//      V
// middleware to parse JSON body in a POST, PUT or DELETE request
// and it assigns the data to req.body
app.use(express.json())
//      |
//      V
// enabling sessions
// app.use(sessions)
//      |
//      V
// middleware for controllers with routes
app.use('/api/songs', songsController)
// app.use('/api/users', usersController)
// app.use('/api/sessions', sessionsController)
//      |
//      V
// send response back to user