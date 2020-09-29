const Password = (sequelize, DataTypes) => {
	const password = sequelize.define('password', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		encryptedPassword: {
			type: DataTypes.STRING,
			allowNull: false
		}
	})

	password.associate = (models) => {
		password.belongsTo(models.folder, {as:'Folders', foreignKey: 'folder_id'})
		password.belongsTo(models.user, {as:'Passwords', foreignKey: 'user_id'})
	}

	return password
}

module.exports = Password