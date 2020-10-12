const BugReport = (sequelize, DataTypes) => {
  const report = sequelize.define('bug_report', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: false
    }
  })
  return report
}

module.exports = BugReport