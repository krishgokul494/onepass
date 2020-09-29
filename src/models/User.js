const User = (sequelize, DataTypes) => {
	const user = sequelize.define('user', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		masterpassword: {
			type: DataTypes.STRING,
			allowNull: false
		},
		encryptionSalt: {
			type: DataTypes.STRING,
			allowNull: false
		},
		remainder: {
			type: DataTypes.STRING,
			allowNull: true
		}
	})

	user.associate = (models) => {
		user.hasMany(models.folder, {as: 'Folders', foreignKey: 'user_id'})
		user.hasMany(models.password, {as: 'Passwords', foreignKey: 'user_id'})
		user.hasMany(models.note, {as: 'Notes', foreignKey: 'user_id'})
	}

	return user
}

module.exports = User