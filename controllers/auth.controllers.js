const { utils, passwordHasher } = require('../helpers');
const { statusCodes } = require('../constants');
const { instanceTransaction } = require('../dataBase').getInstance();

module.exports = {
  authUser: async (req, res, next) => {
    const transaction = await instanceTransaction();
    try {
      const { body, query: { prefLang = 'en' }, profile: { id, password } } = req;

      await passwordHasher.compare(body.password, password, prefLang);

      const tokens = await utils._saveTokensToBD(id, transaction);

      await transaction.commit();

      res.json(tokens);
    } catch (e) {
      next(e);
      await transaction.rollback();
    }
  },

  updateTokens: async (req, res) => {
    const transaction = await instanceTransaction();
    try {
      const { userID } = req.tokens;

      const tokens = await utils._saveTokensToBD(userID, transaction);

      await transaction.commit();

      res.json(tokens);
    } catch (e) {
      res.status(statusCodes.BAD_REQUEST).json(e.message);
      await transaction.rollback();
    }
  }
};
