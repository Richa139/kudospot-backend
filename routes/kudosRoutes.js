const express = require('express');
const { getKudos, addKudos, getAnalytics } = require('../controllers/kudosController');
const router = express.Router();

router.get('/', getKudos);
router.post('/', addKudos);
router.get('/analytics', getAnalytics);

module.exports = router;
