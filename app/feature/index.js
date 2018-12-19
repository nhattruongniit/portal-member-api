const express = require('express');
const router = express.Router();

router.use('/operator', require('app/feature/operator/operator.route'));

module.exports = router;