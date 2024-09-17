const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teamController');

// GET all teams
router.get('/', teamsController.getAllTeams);

// GET a specific team by ID
router.get('/:id', teamsController.getTeamById);
router.get('/name/:name',teamsController.getTeamByName);
module.exports = router;
