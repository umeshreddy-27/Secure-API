require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { generateToken } = require('./generateToken'); // Import the generateToken function

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to validate JWT token
const validateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach the decoded user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(400).json({ message: 'Invalid or expired token.' });
    }
};

// Log the generated token to the console (for testing purposes)
const token = generateToken({ userId: 123 }); // Use the imported function
console.log('Generated JWT Token:', token);

// Fetch data from any external API
const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data from the API');
    }
};

// Paginate the data
const paginateData = (data, page, itemsPerPage = 10) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
};

// Endpoint to fetch all data
app.get('/data', validateToken, async (req, res) => {
    try {
        const data = await fetchData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint to fetch paginated data
app.get('/data/:page', validateToken, async (req, res) => {
    const page = parseInt(req.params.page); // Get the page number from the URL parameter

    if (isNaN(page) || page < 1) {
        return res.status(400).json({ message: 'Invalid page number. Page must be a positive integer.' });
    }

    try {
        const data = await fetchData();

        const paginatedData = paginateData(data, page);

        if (paginatedData.length === 0) {
            return res.status(404).json({ message: 'Page not found.' });
        }

        res.status(200).json(paginatedData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint to post data
app.post('/post-data', validateToken, async (req, res) => {
    const newData = req.body; // Get the data from the request body

    if (!newData || Object.keys(newData).length === 0) {
        return res.status(400).json({ message: 'No data provided.' });
    }

    try {
        // Simulate posting data to an external API
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error posting data to the API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});