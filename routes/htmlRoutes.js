const router = require("express").Router();
const path = require("path");

// notes page route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// default home page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export to server
module.exports = router;