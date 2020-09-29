const CRUD = require('../database/CRUD')
const loadVault = async (req, res) => {
  if(req.isAuthenticated()) {
    await CRUD.loadVault(req.user.id)
    .then(data => {
      res.send(data)
    }).catch(() => {
      res.status(400).send(null)
    })
  }
}

const deleteItem = async (req, res) => {
  console.log([req.user.id, req.body.itemtype, req.body.itemid])
  if (req.isAuthenticated()) {
    await CRUD.deleteItem(req.user.id, req.body.itemtype, req.body.itemid)
    .then((data) => {
      console.log(data)
      res.send({
        'delete': 'success'
      })
    }).catch(() => {
      res.send(400).send(null)
    })
  }
}

const getCount = async (req, res) => {
  if (req.isAuthenticated()) {
    await CRUD.getCount(req.user.id)
      .then((counts) => {
        console.log(counts)
        res.send(counts)
      })
      .catch((error) => {
        console.log(error)
        res.status(400).send(null)
      })
  }
}

const getFolder = async (req, res) => {
  if(req.isAuthenticated()) {
    await CRUD.getFolder(req.user.id, req.body.folderid)
      .then((folder) => {
        res.send(folder)
      })
      .catch((error) => {
        console.log(error)
        res.status(400).send(null)
      })
  }
}

const getPassword = async (req, res) => {
  console.log('body', req.body)
  if(req.isAuthenticated()) {
    await CRUD.getPassword(req.user.id, req.body.passwordid)
      .then((password) => {
        console.log(password)
        res.send(password)
      })
      .catch((error) => {
        console.log(error)
        res.status(400).send(null)
      })
  }
}

module.exports = {
  loadVault,
  deleteItem,
  getCount,
  getFolder,
  getPassword
}