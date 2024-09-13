const fs = require('fs');
const path = require('path');

// Path to the players JSON file
const playersFilePath = path.join(__dirname, '../data/players.json');

// GET all players
exports.getAllPlayers = (req, res) => {
  fs.readFile(playersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading players file' });
    }
    res.json(JSON.parse(data));
  });
};

// GET a specific player by ID
exports.getPlayerById = (req, res) => {
  fs.readFile(playersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading players file' });
    }
    const players = JSON.parse(data);
    const player = players.find(p => p.id === parseInt(req.params.id));
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(player);
  });
};

exports.getPlayerByName = (req, res) => {
  fs.readFile(playersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading players file' });
    }
    const players = JSON.parse(data); // Parse the JSON data
    const playerName = players.find(p => p.fullname === req.params.fullname);

    if (!playerName) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(playerName);
  });
};

exports.getPlayerByPosition = (req, res) => {
    fs.readFile(playersFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Error reading players file' });
      }
  
      let players;
      try {
        players = JSON.parse(data); // Parse the JSON data
      } catch (parseError) {
        return res.status(500).json({ message: 'Error parsing players file' });
      }
  
      if (!Array.isArray(players)) {
        return res.status(500).json({ message: 'Players data is not an array' });
      }
  
      // Assuming position is passed as a simple string
      const playerPosition = players.filter(p => p.position.name === req.params.position);
  
      if (playerPosition.length === 0) {
        return res.status(404).json({ message: 'Player not found' });
      }
      res.json(playerPosition);
    });
  };