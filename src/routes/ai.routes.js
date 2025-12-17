const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller.js');


router.post('/summarize', aiController.summarize);

router.post('/ask', aiController.ask);

module.exports = router;