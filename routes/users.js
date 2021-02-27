const express = require('express');
const { route } = require('.');
const router = express.Router();

let userscontroller = require('../controllers/users')

router.get('/', userscontroller.index);

module.exports = router;