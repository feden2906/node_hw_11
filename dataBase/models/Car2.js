const DataTypes = require('sequelize');

module.exports = (client) => {
  const Car2 = client.define(
    'Car2',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      producer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      owner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false
      }
    },
    {
      tableName: 'cars2',
      timestamps: false
    }
  );

  return Car2;
};
