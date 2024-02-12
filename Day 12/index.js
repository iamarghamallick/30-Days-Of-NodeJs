const express = require("express");
const rateLimitMiddleware = require('./rateLimitMiddleware');
const app = express();

/**
 * Rate-limiting middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

app.use(rateLimitMiddleware);

app.get('/', (req, res) => {
    res.json({ message: 'Hello Argha!' });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});