var createError = require('http-errors')
var express = require('express')
var path = require('path')

var logger = require('morgan')
var apiRouter = require('./routes/index')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).end()
})

module.exports = app
