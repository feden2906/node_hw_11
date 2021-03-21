const fs = require('fs-extra').promises;

const { passwordHasher } = require('../helpers');
const { instanceTransaction } = require('../dataBase').getInstance();
const {
  directoryName: {
    USERS, DOCS, PHOTOS, VIDEOS
  }, statusCodes, statusMessages, emailActionsEnum
} = require('../constants');
const { userService, mailService } = require('../services');

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const users = await userService.findUsers(req.query);

      res.json(users);
    } catch (e) {
      next(e);
    }
  },

  getUserById: (req, res, next) => {
    try {
      const user = req.profile;

      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    const transaction = await instanceTransaction();
    try {
      const { body, body: { name, email, password }, query: { prefLang = 'en' } } = req;

      const hashPassword = await passwordHasher.hash(password);

      await userService.createUser({ ...body, password: hashPassword }, transaction);

      await mailService.sendMail(email, emailActionsEnum.WELCOME, { name });

      await transaction.commit();

      res.status(statusCodes.CREATED).json(statusMessages.USER_IS_CREATED[prefLang]);
    } catch (e) {
      next(e);
      await transaction.rollback();
    }
  },

  updateUser: async (req, res, next) => {
    const transaction = await instanceTransaction();
    try {
      const {
        body, body: { name, email, password }, params: { userID }, query: { prefLang = 'en' }
      } = req;

      const hashPassword = await passwordHasher.hash(password);

      await userService.updateUser(userID, { ...body, password: hashPassword }, transaction);

      await mailService.sendMail(email, emailActionsEnum.CHANGE_INFO, { name });

      await transaction.commit();

      res.json(statusMessages.USER_WAS_UPDATE[prefLang]);
    } catch (e) {
      next(e);
      await transaction.rollback();
    }
  },

  deleteUser: async (req, res, next) => {
    const transaction = await instanceTransaction();
    try {
      const { profile: { email, name }, params: { userID }, query: { prefLang = 'en' } } = req;

      await userService.deleteUser(userID, transaction);

      await mailService.sendMail(email, emailActionsEnum.DELETE_ACCOUNT, { name });

      await transaction.commit();

      res.json(statusMessages.USER_WAS_DELETED[prefLang]);
    } catch (e) {
      next(e);
      await transaction.rollback();
    }
  }
};
