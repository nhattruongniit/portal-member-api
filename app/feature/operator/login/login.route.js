const express = require('express');
const router = express.Router();
const loginController = require('./login.controller');

router.post('/login', loginController.start);

module.exports = router;