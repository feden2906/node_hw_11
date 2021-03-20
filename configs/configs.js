module.exports = {
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/users_cars',
  JWT_SECRET: process.env.JWT_SECRET || 'MY_SECRET',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'MY_REFRESH_SECRET',
  PORT: process.env.PORT || 5050,

  ROOT_EMAIL: process.env.ROOT_EMAIL || 'test@gmail.com',
  ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '12345',

  DB_LOGIN: process.env.DB_LOGIN || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'root',

  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  DB_HOST: process.env.DB_HOST || "127.0.0.1",
  DB_SCHEMA: process.env.DB_SCHEMA || 'users-cars',
};
