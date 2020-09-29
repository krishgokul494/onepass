const router = require('express').Router()
const vaultController = require('../controllers/vault')

router.post('', vaultController.loadVault)

router.post('/delete', vaultController.deleteItem)

router.get('/count', vaultController.getCount)

router.post('/folder', vaultController.getFolder)

router.post('/password/getPassword', vaultController.getPassword)

module.exports = router