// 10. Problem: Express Static Files

// Problem Statement: Create an Express application that serves static files
// (e.g., HTML, CSS, images) from a "public" directory. Ensure that accessing
// the root ("/") returns the "index.html" file from the "public" directory.

// Express application serving static files from the "public" directory

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

function staticFileServer(req, res) {
    // Your implementation here
    if (req.url === '/') {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } else {
        res.sendFile(path.join(__dirname, 'public', req.url));
    }
}

app.get('/', staticFileServer);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Test Cases:

// 1. Request to / should return the content of "public/index.html".
// 2. Request to /styles/style.css should return the content of "public/styles/style.css".