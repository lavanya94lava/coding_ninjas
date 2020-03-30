const express = require('express');
const token = require('../../../config/authenticate');
const router  = express.Router();
const reportsApi = require('../../../controllers/api/v1/reports_api');

// route actions for patients to be created only if doctor is loggedin 
router.post('/:id/create_report',token.authenticate,reportsApi.createReport);
router.get('/:id/all_reports',token.authenticate,reportsApi.all_reports);
module.exports = router;