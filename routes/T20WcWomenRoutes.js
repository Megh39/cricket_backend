const express = require('express');
const router = express.Router();
const { getMatchesByTeamName,getSeasonByYear, sortMatchesByDate } = require('../controllers/T20WcWomenController');

// Get matches by team
router.get('/team/:teamName', getMatchesByTeamName);

router.get('/season/:seasonYear',getSeasonByYear);
// Sort matches by date
router.get('/sort/date', sortMatchesByDate);

module.exports = router;
