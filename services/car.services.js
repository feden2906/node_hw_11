const db = require('../dataBase').getInstance();

const { CAR } = require('../constants/modelNames.enum');

module.exports = {
  findCars: (query) => {
    const Car = db.getModel(CAR);

    return Car.findAll({ where: query });
  },

  CarById: (userID) => {
    const Car = db.getModel(CAR);

    return Car.findOne({ where: userID })
  },

  createCar: (carObject, transaction) => {
    const Car = db.getModel(CAR);

    return Car.create(carObject, { transaction })
  },

  updateCar: (id, carObject, transaction) => {
    const Car = db.getModel(CAR);

    return Car.update(carObject, { where: { id }, transaction })
  },

  deleteCar: (id, transaction) => {
    const Car = db.getModel(CAR);

    return Car.destroy({ where: { id }, transaction })
  }
};
