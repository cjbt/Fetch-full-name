const express = require('express');
const controller = require('./lastnameController');

const router = express.Router();

router.get('/', controller.getALastName);

module.exports = router;
