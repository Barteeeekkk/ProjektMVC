const express = require('express');
const router = express.Router();

const formController = require('../controllers/formController');

router.delete('/:id',formController.deleteFrom);

module.exports = router;