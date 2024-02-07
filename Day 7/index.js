/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

const express = require("express");
const app = express();
const port = 3000;

function requestLoggerMiddleware(req, res, next) {
    // Your implementation here
    const timeStamp = new Date().toLocaleString();
    const method = req.method;
    console.log(`${timeStamp} - ${method} request received`);
    next();
}

app.use(requestLoggerMiddleware);
app.get('/', (req, res) => {
    res.send("Hello Argha");
});
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});