const db = require('../dataBase').getInstance();

const { USER } = require('../constants/modelNames.enum');

module.exports = {
  findUsers: (query) => {
    const User = db.getModel(USER);

    return User.findAll({ where: query });
  },

  findUserById: (userID) => {
    const User = db.getModel(USER);

    return User.findByPk(userID);
  },

  findUser: (findObj) => {
    const User = db.getModel(USER);

    return User.findOne({ where: findObj });
  },

  createUser: (userObject, transaction) => {
    const User = db.getModel(USER);

    return User.create(userObject, { transaction });
  },

  updateUser: (id, userObject, transaction) => {
    const User = db.getModel(USER);

    return User.update(userObject, { where: { id }, transaction });
  },

  deleteUser: (id, transaction) => {
    const User = db.getModel(USER);

    return User.destroy({ where: { id }, transaction });
  }
};
