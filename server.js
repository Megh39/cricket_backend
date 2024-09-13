// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { connectDB } = require('./config/db.js');  // Correct import of connectDB

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();  // Call the function here

// Routes
app.use('/matches', require('./routes/matchRoutes'));
// app.use('/series', require('./routes/seriesRoutes'));
app.use('/players', require('./routes/playerRoutes'));
app.use('/teams', require('./routes/teamRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
