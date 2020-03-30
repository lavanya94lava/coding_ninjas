const express = require('express');

const router  = express.Router();

// route actions
router.use('/doctors',require('./users'));
router.use('/patients',require('./reports'));

module.exports = router;