const { carService } = require('../services');
const { directoryName: { CARS, DOCS, PHOTOS, VIDEOS }, statusCodes, statusMessages } = require('../constants');
const { instanceTransaction } = require('../dataBase').getInstance();

module.exports = {
  getCars: async (req, res, next) => {
    try {
      const cars = await carService.findCars(req.query);

      res.json(cars);
    } catch (e) {
      next(e);
    }
  },

  getCarById: async (req, res, next) => {
    try {
      const { carID } = req.params;

      const car = await carService.CarById(carID);

      res.json(car);
    } catch (e) {
      next(e);
    }
  },

  createCar: async (req, res, next) => {
    const transaction = await instanceTransaction();
    try {
      const { body, query: { prefLang = 'en' } } = req;

      await carService.createCar(body, transaction);

      await transaction.commit();

      res.status(statusCodes.CREATED).json(statusMessages.CAR_IS_CREATED[prefLang]);
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  },

  updateCar: async (req, res, next) => {
    const transaction = await instanceTransaction();
    try {
      const { body, query: { prefLang = 'en' } } = req;

      await carService.updateCar(body, transaction);

      await transaction.commit();

      res.json(statusMessages.CAR_WAS_UPDATED[prefLang]);
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  },

  deleteCar: async (req, res, next) => {
    const transaction = await instanceTransaction();
    try {
      const { params: { carID }, query: { prefLang = 'en' } } = req;

      await carService.deleteCar(carID, transaction);

      await transaction.commit();

      res.json(statusMessages.CAR_WAS_DELETED[prefLang]);
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  }
};
