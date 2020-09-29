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
    return queryInterface.bulkInsert('passwords', [
      {
        id: '6b324e30-43d9-4c30-840b-7af93cd233e6',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_id: '0f051562-d283-449d-b07f-20f81f00c829',
        name: 'x',
        url: 'x',
        userName: 'x',
        encryptedPassword: 'x',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1bf158a5-ccb9-4910-9bc6-6a5eae708d6b',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_id: '0f051562-d283-449d-b07f-20f81f00c829',
        name: 'y',
        url: 'y',
        userName: 'y',
        encryptedPassword: 'y',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2095957d-f91c-46c7-9696-b81486a863fb',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_id: '0f051562-d283-449d-b07f-20f81f00c829',
        name: 'z',
        url: 'z',
        userName: 'z',
        encryptedPassword: 'z',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '0ca46b40-d408-497c-a77a-8fc689869014',
        user_id: '788e7bff-c34b-4496-b7af-22f8e043bdb3',
        folder_id: '4035eddf-b06f-49a6-a683-355b046478d9',
        name: 'q',
        url: 'q',
        userName: 'q',
        encryptedPassword: 'q',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5e75150a-cd08-4441-a672-2567942325dc',
        user_id: '788e7bff-c34b-4496-b7af-22f8e043bdb3',
        folder_id: '4035eddf-b06f-49a6-a683-355b046478d9',
        name: 'w',
        url: 'w',
        userName: 'w',
        encryptedPassword: 'w',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e02d41ce-6768-4cb7-9ec4-287ef853c294',
        user_id: '788e7bff-c34b-4496-b7af-22f8e043bdb3',
        folder_id: '6c0856da-46db-4454-a52f-b186aff37569',
        name: 'r',
        url: 'r',
        userName: 'r',
        encryptedPassword: 'r',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f0367727-054f-4f19-a1dd-ffc9629b60e0',
        user_id: '788e7bff-c34b-4496-b7af-22f8e043bdb3',
        folder_id: '6c0856da-46db-4454-a52f-b186aff37569',
        name: 'g',
        url: 'g',
        userName: 'g',
        encryptedPassword: 'g',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '542133b4-aea1-4936-9d53-52aa7ac78b8d',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_id: 'd2412cf0-234f-48a2-bb14-4f55c93d3fab',
        name: 'l',
        url: 'l',
        userName: 'l',
        encryptedPassword: 'l',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '79002fd9-0591-4e0a-b594-74762e3f3552',
        user_id: '581df24b-dc90-4bea-85bc-f8ac86ed9f1f',
        folder_id: '2e1aac8c-a4a1-4395-b149-ff7b8fa5412f',
        name: 'c',
        url: 'c',
        userName: 'c',
        encryptedPassword: 'c',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d2ea95b-8ac3-41bf-8f30-139cdc374af1',
        user_id: '581df24b-dc90-4bea-85bc-f8ac86ed9f1f',
        folder_id: '2e1aac8c-a4a1-4395-b149-ff7b8fa5412f',
        name: 'x',
        url: 'x',
        userName: 'x',
        encryptedPassword: 'x',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f4567b5a-01a5-4afe-95c6-116640f8138a',
        user_id: '581df24b-dc90-4bea-85bc-f8ac86ed9f1f',
        folder_id: '2e1aac8c-a4a1-4395-b149-ff7b8fa5412f',
        name: 't',
        url: 't',
        userName: 't',
        encryptedPassword: 't',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2c78daf1-1435-490a-8f51-02047a59768e',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_id: '36cff2ce-55ee-4571-a3ac-58124a32f97d',
        name: 'Localhost:84',
        url: 'http://localhost:8084',
        userName: 'gokulakrishnan.1702029@srit.org',
        encryptedPassword: 'U2FsdGVkX1/BiwiEHnHpN6uEGbV+T6BzII/xa8tRcjl5WJ86gyeyXQZvv3BxQfvS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c4329ce9-a92e-4480-bc0d-fdd2f2963dab',
        user_id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        folder_id: 'd2412cf0-234f-48a2-bb14-4f55c93d3fab',
        name: 'Localhost:83',
        url: 'http://localhost:8083',
        userName: 'gokulakrishnan.1702029@srit.org',
        encryptedPassword: 'U2FsdGVkX18l2hWN8FntfEtQRZDtnYKnycrfp2z78jA=',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {
      ignoreDuplicates: true
    })
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('passwords', null, {})
  }
};
