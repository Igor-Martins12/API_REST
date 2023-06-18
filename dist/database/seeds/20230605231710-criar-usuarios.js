"use strict";const bcryptjs = require('bcryptjs');


module.exports = {
  async up (queryInterface) { 
     await queryInterface.bulkInsert(
      'users', 
      [
        {
          nome: 'John Doe',
          email: 'Luis@Gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'John 2Doe',
          email: 'Luis2@Gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'John 3Doe',
          email: 'Luis3@Gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
      ],
      {},
      );
   

  },

  async down () {},
};
