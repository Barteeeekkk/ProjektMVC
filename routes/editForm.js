const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');

router.get('/forms/:id', formController.formEditRender);

router.put('/forms/:id',formController.editForm);

module.exports = router;