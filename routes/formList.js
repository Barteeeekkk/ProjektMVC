const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');

router.get('/forms', formController.formListRender);

module.exports = router;