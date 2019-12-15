const express = require('express');
const controller = require('./middlenameController');

const router = express.Router();

router.get('/', controller.getAMiddleName);

module.exports = router;
