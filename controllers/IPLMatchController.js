const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://megh1:mongomegh@cluster0.eoycl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const databaseName = 'cricketdb'; // Replace with your database name
const matchesCollection = 'ipl'; // Replace with your collection name

// Get matches by team
exports.getMatchesByTeamName = async (req, res) => {
    try {
        await client.connect();
        const database = client.db(databaseName);
        const collection = database.collection(matchesCollection);

        // Access the team name from the route parameter
        const teamName = req.params.teamName;


        // Query to find matches where team1 or team2 matches the team name
        const query = { "info.teams": teamName };

        // const query = { $or: [{ team1: teamName }, { team2: teamName }] };
        const matches = await collection.find(query).toArray();


        if (matches.length === 0) {
            return res.status(404).json({ message: 'No matches found for this team' });
        }
        res.json(matches);
    } catch (err) {
        console.error('Error fetching matches from MongoDB:', err);
        res.status(500).json({ message: 'Error fetching matches from MongoDB' });
    } finally {
        await client.close();
    }
};
exports.getSeasonByYear = async (req, res) => {
    try {
        await client.connect();
        const database = client.db(databaseName);
        const collection = database.collection(matchesCollection);

        const seasonYear = req.params.seasonYear; // Keep it as a string

        // Check if the seasonYear is a number or a string
        const seasonYearAsNumber = parseInt(seasonYear);
        
        // Create the query to check for both string and integer representations
        const query = {
            "info.season": {
                $in: [seasonYear, seasonYearAsNumber]
            }
        };

        const matches = await collection.find(query).toArray();

        if (matches.length === 0) {
            return res.status(404).json({ message: 'No matches found for this season' });
        }

        res.json(matches);
    } catch (err) {
        console.error('Error fetching matches from MongoDB:', err);
        res.status(500).json({ message: 'Error fetching matches from MongoDB' });
    } finally {
        await client.close();
    }
};

// Sort matches by date
exports.sortMatchesByDate = async (req, res) => {
    try {
        await client.connect();
        const database = client.db(databaseName);
        const collection = database.collection(matchesCollection);

        const matches = await collection.find().sort({ date: 1 }).toArray();  // 1 for ascending, -1 for descending
        res.json(matches);
    } catch (err) {
        console.error('Error sorting matches by date from MongoDB:', err);
        res.status(500).json({ message: 'Error sorting matches by date from MongoDB' });
    } finally {
        await client.close();
    }
};
