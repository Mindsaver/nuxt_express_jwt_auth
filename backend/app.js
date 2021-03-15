var express = require('express')
const mongoose = require('mongoose')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var authRouter = require('./routes/auth')

mongoose.connect('mongodb://127.0.0.1:27017/auth_boilerplate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.on('error', (error) => console.log(error))

//require('./auth')
var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200)
  } else {
    next()
  }
}
app.use(allowCrossDomain)

app.use('/api/auth', authRouter)

module.exports = app
