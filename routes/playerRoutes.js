const express = require('express');
const router = express.Router();
const {getPlayerByCountryName,getPlayerByFirstName,getPlayerByFullName,getPlayerByPosition,getPlayerByLastName,getPlayerById,getAllPlayers} = require('../controllers/playerController');

// GET all players
router.get('/', getAllPlayers);

// GET a specific player by ID
router.get('/:id', getPlayerById);

router.get("/name/:firstname",getPlayerByFirstName);
router.get("/name/:lastname",getPlayerByLastName);
router.get("/name/:fullname",getPlayerByFullName);
router.get('/country/:countryname',getPlayerByCountryName);
router.get("/position/:position",getPlayerByPosition);
module.exports = router;
