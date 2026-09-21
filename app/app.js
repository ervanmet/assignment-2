const express = require("express");
const path = require("path");
const pages = require("../model/model");

const app = express();
const PORT = 3000;

// Serve the website files
app.use(express.static(path.join(__dirname, "..")));

// Send the page data to the website
app.get("/api/pages", (req, res) => {
    res.json(pages);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});