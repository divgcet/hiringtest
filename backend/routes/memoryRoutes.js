const express = require('express');
const { saveGameData, getResultHistory} = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);
router.get('/resultHistory', getResultHistory);

module.exports = router;
