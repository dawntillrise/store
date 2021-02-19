'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('Products', 'companyId');

      await queryInterface.addColumn('Products', 'categoryId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        }
      });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'categoryId');

    await queryInterface.addColumn('Products', 'companyId',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      }
    });
  },
};