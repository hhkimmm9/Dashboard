const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const path = require('path')
const createError = require('http-errors')

require('dotenv').config()
require('./database')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(express.static(path.join(__dirname, 'public')))

// Middleware
// express default json bodyparser
app.use(express.json())
// cors
app.use(cors())
// log only 4xx and 5xx responses to console
app.use(morgan('dev'))
// parses incoming requests with urlencoded payloads.
app.use(express.urlencoded({ extended: false }))

// Route
app.use('/api/user', require('./routes/auth/auth'))
app.use('/api/todos', require('./routes/todos'))
app.use('/api/post', require('./routes/posts'))

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  // app.use(express.static(path.join(__dirname, 'public')))

  // Handle SPA
  app.get(/.*/, (req, res) =>
    // app.get('*', (req, res) =>
    res.sendFile(__dirname + '/public/dist/index.html')
  )
}

// Run the server.
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
