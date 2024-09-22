const express = require('express');
const router = express.Router();
const { getMatchesByTeamName,getSeasonByYear, sortMatchesByDate,getMatchById } = require('../controllers/WcWomenController');

// Get matches by team
router.get('/team/:teamName', getMatchesByTeamName);
//Get match by id
router.get('/id/:id',getMatchById);
router.get('/season/:seasonYear',getSeasonByYear);
// Sort matches by date
router.get('/sort/date', sortMatchesByDate);

module.exports = router;
