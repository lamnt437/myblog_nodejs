const express = require('express');
const router = express.Router();
meetingController = require('../controllers/meeting');

router.get('/', meetingController.index);
router.post('/signature', meetingController.signature);

module.exports = router;