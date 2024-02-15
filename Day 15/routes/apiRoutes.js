const express = require("express");
const router = express.Router();

router.post("/data", (req, res) => {
    const requestData = req.body;
    res.json({ message: "Data received successfully", data: requestData });
});

module.exports = router;