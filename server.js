const express = require('express');
const { Pool } = require('pg');
const faker = require('faker');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = process.env.PORT || 5000;

// PostgreSQL database connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Chat-Bot-Two-Db',
    password: 'admin',
    port: 5432,
});

app.use(express.json());
app.use(cors()); // Use cors middleware to enable CORS

// Function to generate random response
function generateRandomResponse() {
    // Generate a random sentence using faker.js
    const randomSentence = faker.lorem.sentence();
    return randomSentence;
}

// Endpoint to generate random text responses
app.get('/random-response', async (req, res) => {
    try {
        // Generate a random response using faker.js
        const response = generateRandomResponse();
        res.json({ response });
    } catch (err) {
        console.error('Error generating random response', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
