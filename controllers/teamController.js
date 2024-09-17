const fs = require('fs');
const path = require('path');

// Path to the teams JSON file
const teamsFilePath = path.join(__dirname, '../data/teams.json');

// GET all teams
exports.getAllTeams = (req, res) => {
  fs.readFile(teamsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading teams file' });
    }
    res.json(JSON.parse(data));
  });
};

// GET a specific team by ID
exports.getTeamById = (req, res) => {
  fs.readFile(teamsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading teams file' });
    }
    const teams = JSON.parse(data);
    const team = teams.find(t => t.id === parseInt(req.params.id));
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.json(team);
  });
};


exports.getTeamByName = (req, res) => {
  fs.readFile(teamsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading teams file:', err);
      return res.status(500).json({ message: 'Error reading teams file' });
    }
    const teams = JSON.parse(data);
    

    const teamName = teams.find(t => t.name.toLowerCase() === req.params.name.toLowerCase());
    if (!teamName) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.json(teamName);
  });
};
