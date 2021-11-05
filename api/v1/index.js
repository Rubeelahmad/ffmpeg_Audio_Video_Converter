const express = require("express");
const router = express.Router();
const user = require('./user');
const file_info = require('./file-info');

router.use('/users', user);
router.use('/file-info', file_info);

module.exports = router;
