const express = require('express');
const controller = require('./firstnameController');

const router = express.Router();

router.get('/', controller.getAFirstName);

module.exports = router;
