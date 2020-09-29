'use strict';

// const {v4: uuid} = require('uuid')

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('folders', [
      {
        id: '0f051562-d283-449d-b07f-20f81f00c829',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_name: ':General',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4035eddf-b06f-49a6-a683-355b046478d9',
        user_id: '788e7bff-c34b-4496-b7af-22f8e043bdb3',
        folder_name: ':General',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6c0856da-46db-4454-a52f-b186aff37569',
        user_id: '788e7bff-c34b-4496-b7af-22f8e043bdb3',
        folder_name: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd2412cf0-234f-48a2-bb14-4f55c93d3fab',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_name: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2e1aac8c-a4a1-4395-b149-ff7b8fa5412f',
        user_id: '581df24b-dc90-4bea-85bc-f8ac86ed9f1f',
        folder_name: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '36cff2ce-55ee-4571-a3ac-58124a32f97d',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_name: 'Z',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('folders', null, {})
  }
};
