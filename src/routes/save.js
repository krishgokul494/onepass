const router = require('express').Router()
const saveController = require('../controllers/save')

router.post('/password', saveController.savePassword)

router.post('/note', saveController.saveNote)

router.post('/folder', saveController.createFolder)

module.exports = router