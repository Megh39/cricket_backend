const { getDB } = require('../config/db');

// Get matches by team
const getMatchesByTeam = async (req, res) => {
  const teamName = req.params.teamName;
  const db = getDB();
  
  try {
    const matches = await db.collection('ODIs').find({
      $or: [{ team1: teamName }, { team2: teamName }]
    }).toArray();
    
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get matches by series
const getMatchesBySeries = async (req, res) => {
  const seriesName = req.params.seriesName;
  const db = getDB();
  
  try {
    const matches = await db.collection('ODIs').find({ series: seriesName }).toArray();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Sort matches by date
const sortMatchesByDate = async (req, res) => {
  const db = getDB();
  
  try {
    const matches = await db.collection('ODIs').find().sort({ date: 1 }).toArray();  // 1 for ascending, -1 for descending
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getMatchesByTeam, getMatchesBySeries, sortMatchesByDate };
