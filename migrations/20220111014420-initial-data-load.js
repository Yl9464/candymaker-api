'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('manufacturers', [{
      name: 'August Storck KG',
      country: 'DE'
    },
    {
      name: 'Cadbury',
      country: 'UK'
    },
    {
      name: 'Ferrara Candy Company',
      country: 'US',
    },
    {
      name: 'G.B. Ambrosoli',
      country: 'IT'
    },
    {
      name: 'Impact Confections',
      country: 'US'
    },
    {
      name: 'Mars',
      country: 'US'
    },
    {
      name: 'Nabisco',
      country: 'US'
    },
    {
      name: 'Necco',
      country: 'US'
    },
    {
      name: 'Nestlé',
      country: 'CH'
    },
    {
      name: 'Perfetti Van Melle',
      country: 'IT'
    },
    {
      name: 'Just Born, Inc',
      country: 'US'
    },
    {
      name: 'The Hershey Company',
      country: 'US'
    },
    {
      name: 'The Wrigley Company',
      country: 'US'
    },
    {
      name: 'Tootsie Roll Industries',
      country: 'US'
    },
    {
      name: 'Topps',
      country: 'US'
    },
    {
      name: 'Zeta Espacial S.A.',
      country: 'YES'
    },
    ])
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('manufacturers')
  }
}
