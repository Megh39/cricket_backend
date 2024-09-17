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
app.use('/iccmatches',require('./routes/iccmatchRoutes.js'));
app.use('/odimatches', require('./routes/odimatchRoutes'));
app.use('/wcwomen',require('./routes/wcWomenRoutes'));
app.use('/t20matches',require('./routes/t20MatchRoutes.js'));
app.use('/players', require('./routes/playerRoutes'));
app.use('/teams', require('./routes/teamRoutes'));
app.use("/ipl",require('./routes/iplMatchRoutes.js'));
app.use('/wpl',require('./routes/wplMatchRoutes.js'));
app.use('/t20wc',require('./routes/t20WcRoutes.js'));
app.use('/t20wcwomen',require('./routes/T20WcWomenRoutes.js'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
