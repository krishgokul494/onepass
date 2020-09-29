'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      masterpassword: {
          type: Sequelize.STRING,
          allowNull: false
      },
      encryptionSalt: {
          type: Sequelize.STRING,
          allowNull: false
      },
      remainder: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      UpdatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("users")
  }
};
