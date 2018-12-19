const express = require('express');
const app = express();
const config = require('app/config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const operator = require('app/model/operator');

// libs
const logger = require('app/lib/logger');

// TODO: SETUP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// TODO: ROUTES
// ============================================
app.use('/api', require('app/feature'));

// TODO: START SERVER
// ============================================
const options = {
  useCreateIndex: true,
  poolSize: 5,
  auto_reconnect: true,
  reconnectTries: 30,
  reconnectInterval: 1000,
  keepAlive: 30000,
  connectTimeoutMS: 30000,
  autoIndex: true,
  dbName: config.MONGO_DB_NAME,
  user: config.MONGO_USER,
  pass: config.MONGO_PASS,
  auth: {
    authdb: config.MONGO_AUTH
  },
  useNewUrlParser: true,
};
mongoose.connect(config.MONGO_URL, options, async () => {
  const data = {
    email: config.OPERATOR_EMAIL,
    password: config.OPERATOR_PASS
  };
  await operator.findOne({ email: data.email }, (err, email) => {
    if (email) return false;
    operator.create(data);
  });
  app.listen(config.PORT, () => {
    logger.info(`Server listening at localhost:${config.PORT}`);
  });
});