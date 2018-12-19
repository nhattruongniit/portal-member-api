require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,

  MONGO_URL: process.env.MONGO_URL,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASS: process.env.MONGO_PASS,
  MONGO_AUTH: process.env.MONGO_AUTH,

  OPERATOR_EMAIL: process.env.OPERATOR_EMAIL,
  OPERATOR_PASS: process.env.OPERATOR_PASS
};