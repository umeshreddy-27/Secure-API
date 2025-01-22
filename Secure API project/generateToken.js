const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// Function to generate a JWT token for testing purpose.
const generateToken = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return token;
};

module.exports = { generateToken };