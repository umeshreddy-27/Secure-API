const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get the token from the request header
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;