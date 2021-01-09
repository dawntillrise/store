const express = require('express');
const controller = require('../controllers/AuthController');
const router = express.Router();

router.post('/login', controller.sign_in)

router.post('/register', controller.sign_up)

module.exports = router;