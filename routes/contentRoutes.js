const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Définir les routes
router.get('/content', contentController.getContentList);
router.get('/content/:id', contentController.getDetailContent);
router.post('/createContent', contentController.createContent);

module.exports = router;
