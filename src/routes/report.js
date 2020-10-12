const BugReport = require('../models').bug_report
const router = require('express').Router()
// const {body} = require('express-validator')

// report bug/issue in app
router.post('', async (req, res) => {
  console.log('x', req.body)
	await BugReport.create({
    email: req.body.email,
    description: req.body.description
  })
    .then(() => {
      res.send(true)
    })
    .catch((error) => {
      res.send(error)
    })
})

module.exports = router