/**
 * Express route to handle reqs with a positive integer parameter
 * @param {Object} req - Express req object
 * @param {Object} res - Express res object
 */

const express = require("express");
const app = express();
const port = 8000;

function positiveIntegerHandler(req, res) {
    // Your implementation here
    let number = req.query.number;
    let num = Number(number);
    if (num >= 0)
        res.send(`The given number ${number} is a positive integer.`);
    else {
        throw res.status(400).send(`ERROR : ${res.statusCode} -The given number ${number} is not positive integer.`)
    }
}

app.get("/positive", (req, res) => {
    positiveIntegerHandler(req, res)
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});