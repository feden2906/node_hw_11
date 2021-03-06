const db = require('../dataBase').getInstance();

const { O_AUTH } = require('../constants/modelNames.enum');

module.exports = {
  saveTokenToBD: (authObj, transaction) => {
    const O_Auth = db.getModel(O_AUTH);

    return O_Auth.create(authObj, { transaction });
  },

  getTokensByAccess: (access_token) => {
    const O_Auth = db.getModel(O_AUTH);

    return O_Auth.findOne({ where: { access_token } });
  },

  getTokensByRefresh: (refresh_token) => {
    const O_Auth = db.getModel(O_AUTH);

    return O_Auth.findOne({ where: { refresh_token } });
  },

  deleteTokens: (userID, transaction) => {
    const O_Auth = db.getModel(O_AUTH);

    return O_Auth.destroy({ where: { userID }, transaction });
  },
};
