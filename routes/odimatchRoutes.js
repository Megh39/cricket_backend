const express = require('express');
const router = express.Router();
const { getMatchesByTeamName, getMatchesBySeriesName, sortMatchesByDate } = require('../controllers/ODIMatchController');

// Get matches by team
router.get('/team/:teamName', getMatchesByTeamName);

// Get matches by series
router.get('/series/:seriesName', getMatchesBySeriesName);

// Sort matches by date
router.get('/sort/date', sortMatchesByDate);

module.exports = router;
