var express = require('express')
var router = express.Router()
var api = require('../api/v1/resume')
router.get('/home', api.getHome)
router.get('/company', api.getCompany)
router.get('/project', api.getProject)
router.get('/skill', api.getSkill)
module.exports = router
