const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playerController');

// GET all players
router.get('/', playersController.getAllPlayers);

// GET a specific player by ID
router.get('/:id', playersController.getPlayerById);

router.get("/name/:fullname",playersController.getPlayerByName);
router.get("/position/:position",playersController.getPlayerByPosition);
module.exports = router;
