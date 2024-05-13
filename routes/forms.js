const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');

router.get('/add-form', formController.newFormRender);

router.post('/forms',formController.addNewForm);

module.exports = router;