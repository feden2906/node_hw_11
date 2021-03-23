module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'cars',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
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
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false
          }
        }
    )
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cars')
  }
};
