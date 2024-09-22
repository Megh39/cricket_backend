const express = require('express');
const router = express.Router();
const { getMatchesByTeamName, getMatchesBySeriesName, getSeasonByYear,sortMatchesByDate,getMatchById } = require('../controllers/T20sMatchController');

// Get matches by team
router.get('/team/:teamName', getMatchesByTeamName);
//Get match by id
router.get('/id/:id',getMatchById);
// Get matches by series
router.get('/series/:seriesName', getMatchesBySeriesName);
router.get('/season/:seasonYear',getSeasonByYear);
// Sort matches by date
router.get('/sort/date', sortMatchesByDate);

module.exports = router;
