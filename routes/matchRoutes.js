const express = require('express');
const router = express.Router();
const { getMatchesByTeam, getMatchesBySeries, sortMatchesByDate } = require('../controllers/matchController');

// Get matches by team
router.get('/team/:teamName', getMatchesByTeam);

// Get matches by series
router.get('/series/:seriesName', getMatchesBySeries);

// Sort matches by date
router.get('/sort/date', sortMatchesByDate);

module.exports = router;
