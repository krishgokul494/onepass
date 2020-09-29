'use strict';

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
    return await queryInterface.bulkInsert('users', [
      {
        id: 'b467aa7a-3a5b-4dfb-9e26-e7ecf9d8b69a',
        email: 'master@gmail.com',
        masterpassword: 'c6cc78585c529461d693df2becc9e34d',
        encryptionSalt: 'afa471cfa4d2c6b96249e7cf17611a5f',
        remainder: 'masteR@12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '788e7bff-c34b-4496-b7af-22f8e043bdb3',
        email: 'krishgokul351@gmail.com',
        masterpassword: '4e8778b37c4e84fe09d7ab74fe7ba045',
        encryptionSalt: '5b87b7f7970ab23b989183189f6b050d',
        remainder: 'masteR@12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6994a677-66b4-4659-8d38-586ddfd67b8d',
        email: 'gokulakrishnan@gmail.com',
        masterpassword: '89ef8b98dfce0013c4e260e5967dee8f',
        encryptionSalt: '24d382615b53384d5e43416dbe8bd4f8',
        remainder: 'masteR@12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '581df24b-dc90-4bea-85bc-f8ac86ed9f1f',
        email: 'bhupesh@gmail.com',
        masterpassword: '620038010323650410a44e205d82730a',
        encryptionSalt: '71719d693b5c9661efaf54f634129055',
        remainder: 'masteR@12',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('users', null, {})
  }
};
