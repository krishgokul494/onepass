const Folder = (sequelize, DataTypes) => {
	const folder = sequelize.define('folder', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: false,
			refs: {
				model: 'users',
				key: 'id'
			}
		},
		folder_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		indexes: [
			{
				unique: true,
				fields: ['user_id', 'folder_name']
			}
		]
	})

	folder.associate = (models) => {
		folder.hasMany(models.password, {as:'Passwords', foreignKey: 'folder_id'})
		folder.belongsTo(models.user, {as: 'Folders', foreignKey: 'user_id'})
		folder.hasMany(models.note, {as: 'Notes', foreignKey: 'folder_id'})
	}

	return folder
}

module.exports = Folder