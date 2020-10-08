// const Folder = require('../models').folder
const CRUD = require('../database/CRUD')

// const Password  = require('../models').password
const createFolder = async (req, res) => {
	var folder = await CRUD.addFolder({
		user_id: req.user.id,
		folder_name: req.body.folder
	})
	console.log(folder)
	res.send(folder)
	// await Folder.findOrCreate({
	//     where: {
	//         user_id: req.user.dataValues.id,
	//         folder_name: req.body.folder
	//     }
	// }).then((folder) => {
	//     res.send(folder)
	// }).catch(error =>{
	//     console.log(error)
	// })
}
const savePassword = async (req, res) => {
	await CRUD.addFolder({
		user_id: req.user.id,
		folder_name: req.body.folder
	}).then((folder) => {
		CRUD.addPassword({
			id: req.body.id,
			user_id: req.user.dataValues.id,
			folder_id: folder.dataValues.id,
			name: req.body.name,
			url: req.body.url,
			userName: req.body.username,
			encryptedPassword: req.body.password
		}).then(() => {
			res.send({
				save: true,
				folder_id: folder.dataValues.id
			})
		}).catch((error) => {
			console.log(error)
		})
	}).catch((error) => {
		console.log(error)
	})
	// await Folder.findOrCreate({
	//     where: {
	//         user_id: req.user.dataValues.id,
	//         folder_name: req.body.folder
	//     }
	// }).then((folder) => {
	//     await Password.create({
	//         user_id: req.user.dataValues.id,
	//         folder: folder.dataValues.id,
	//         name: req.body.name,
	//         url: req.body.url,
	//         userName: req.body.username,
	//         encryptedPassword: req.body.password
	//     }).then(() => {
	//         res.send({
	//             save: true
	//         })
	//     }).catch((error) => {
	//         console.log(error);
	//     })
	// }).catch(error =>{
	//     console.log(error)
	// })
}

const saveNote = async (req, res) => {
	await CRUD.addFolder({
		user_id: req.user.id,
		folder_name: req.body.folder
	}).then((folder) => {
		CRUD.addNote({
			id: req.body.id,
			user_id: req.user.dataValues.id,
			folder_id: folder.dataValues.id,
			name: req.body.name,
			content: req.body.note
		}).then(() => {
			console.log("folder_id", folder.dataValues.id)
			res.send({
				save: true,
				folder_id: folder.dataValues.id
			})
		}).catch((error) => {
			console.log(error)
		})
	}).catch((error) => {
		console.log(error)
	})
}

module.exports = {
	savePassword,
	createFolder,
	saveNote
}