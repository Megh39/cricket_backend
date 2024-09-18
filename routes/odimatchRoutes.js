const express = require('express');
const router = express.Router();
const { getMatchesByTeamName, getMatchesBySeriesName,getSeasonByYear, sortMatchesByDate } = require('../controllers/ODIMatchController');

// Get matches by team
router.get('/team/:teamName', getMatchesByTeamName);

// Get matches by series
router.get('/series/:seriesName', getMatchesBySeriesName);
router.get('/season/:seasonYear',getSeasonByYear);
// Sort matches by date
router.get('/sort/date', sortMatchesByDate);

module.exports = router;
