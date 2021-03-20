module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
        'cars2',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          producer: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          model: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          owner: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          year: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          price: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false
          }
        }
    )
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('cars2')
  }
};
