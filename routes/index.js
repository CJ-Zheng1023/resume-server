var v1Router = require('./api-v1')
var express = require('express')
var router = express.Router()
router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})
router.use('/v1', v1Router)
module.exports = router
