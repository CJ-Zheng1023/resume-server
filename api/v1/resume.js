var home = require('./json/home.json')
var company = require('./json/company.json')
var project = require('./json/project.json')
var skill = require('./json/skill.json')
module.exports = {
  getHome(req, res, next) {
    res.json(home)
  },
  getCompany(req, res, next) {
    res.json(company)
  },
  getProject(req, res, next) {
    res.json(project)
  },
  getSkill(req, res, next) {
    res.json(skill)
  }
}
