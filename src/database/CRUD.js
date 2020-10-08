// const User = require('../models').user
const Folder = require('../models').folder
const Password = require('../models').password
const Note = require('../models').note
const {QueryTypes} = require('sequelize')
const { sequelize } = require('../models')

const addFolder = async (data) => {
	return await Folder.findOrCreate({
		where: data
	}).then((folder) => {
		return folder[0]
	}).catch((error) => {
		console.log(error)
		return false
	})
}

const addPassword = async (data) => {
	console.log(data)
	return await Password.upsert(data)
		.then(() => {
			return true
		}).catch((error) => {
			console.log(error)
			return false
		})
}

const loadVault = async (id) => {
	return await Folder.findAll({
		attributes: ['id', 'folder_name'],
		where: {
			user_id: id
		},
		include: [
			{
				model: Password,
				as: 'Passwords',
				attributes: ['id', 'folder_id', 'url', 'name', 'userName']
				// order: [
				// 	[Password, 'name', 'ASC']
				// ]
			},
			{
				model: Note,
				as: 'Notes',
				attributes: ['id', 'folder_id', 'name', 'content']
				// order: [
				// 	[Note, 'name', 'ASC']
				// ]
			}
		],
		order: [
			['folder_name', 'ASC']
			// [Password, 'name', 'ASC'],
			// [Note, 'name', 'ASC']
		]
	},{
		raw: true
	}).then((user) => {
		return user
	}).catch((error) => {
		console.log(error)
		return error
	})
}

const deleteItem = async (userid, itemtype, itemid) => {
	return await sequelize.query(
		"DELETE FROM " + itemtype + " WHERE id LIKE :itemid and user_id like :userid", {
			replacements: {
				itemid: itemid,
				userid: userid
			},
			type: QueryTypes.DELETE
		}
	)
}

const getCount = async (userid) => {
	return await sequelize.query(
		"SELECT (SELECT COUNT(*) FROM passwords WHERE user_id LIKE :userid) AS passwordcount, (SELECT COUNT(*) FROM notes WHERE user_id LIKE :userid) AS notecount",{
			replacements: {
				userid: userid
			},
			type: QueryTypes.SELECT
		}
	)
}

const getFolder = async (userid, folderid) => {
	console.log(userid, folderid)
	return await Folder.findOne({
		attributes: ['id', 'folder_name'],
		where: {
			id: folderid,
			user_id: userid
		},
		include: [
			{
				model: Password,
				as: 'Passwords',
				attributes: ['id', 'folder_id', 'url', 'name', 'userName']
			},
			{
				model: Note,
				as: 'Notes',
				attributes: ['id', 'folder_id', 'name', 'content']
			}
		]
	},{
		raw: true
	}).then((folder) => {
		return folder
	}).catch((error) => {
		console.log(error)
		return error
	})
}

const getPassword = async (userid, passwordid) => {
	console.log(passwordid)
	return await Password.findOne(
		{
			attributes: ['encryptedPassword'],
			where: {
				id: passwordid,
				user_id: userid
			}
		},
		{
			raw: true
		}).then((password) => {
			console.log(password)
			return password
		}).catch((error) => {
			return error
		})
}

const addNote = async (noteData) => {
	return await Note.upsert(noteData)
		.then(() => {
			return true
		}).catch((error) => {
			console.log(error)
			return false
		})
}

module.exports = {
	addFolder,
	addPassword,
	loadVault,
	deleteItem,
	getCount,
	getFolder,
	getPassword,
	addNote
}