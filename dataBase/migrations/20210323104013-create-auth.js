module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'auth',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          access_token: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          refresh_token: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          userID: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false
          }
        }
    )
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('auth')
  }
};
