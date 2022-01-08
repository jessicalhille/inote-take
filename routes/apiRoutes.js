const router = require("express").Router();
var fs = require("fs");
const { stringify } = require("querystring");

// uuid npm package installed in order to create a unique id for each note
const { v4: uuidv4} = require('uuid');

// created to post data to db.json
const db = require('../db/db.json');

// api get route
router.get("/notes", (req, res) => {
    // send data in response to 'GET' request
    res.json(db);
});

// api post route
router.post("/notes", (req, res) => {
    // pull the newNote from request
    const newNote = req.body;
    // assign an id from the uuid npm package
    newNote.id = uuidv4();
    // push the newNote into the db file
    db.push(newNote);
    // send the response to the db file
    res.json(db);
});

module.exports = router;