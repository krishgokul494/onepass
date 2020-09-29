const Note = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    id: {
      allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  })

  note.associate = (models) => {
    note.belongsTo(models.user, {as: 'Notes', foreignKey: 'user_id'})
    note.belongsTo(models.folder, {as: 'notes', foreignKey: 'folder_id'})
  }

  return note
}

module.exports = Note