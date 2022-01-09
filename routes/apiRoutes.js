const router = require("express").Router();
var fs = require("fs");

// uuid npm package installed in order to create a unique id for each note
const { v4: uuidv4} = require('uuid');

// created to post data to db.json
const db = require('../db/db.json');

// GET method to return all notes
router.get("/notes", (req, res) => {
    res.json(db);
});

// POST method to add notes
router.post("/notes", (req, res) => {
    // pull the newNote from request
    const newNote = req.body;
    // assign an id from the uuid npm package
    newNote.id = uuidv4();
    // push the newNote into the db file
    db.push(newNote);
    
    res.json(db);
});

// DELETE method to delete note by unique id
router.delete("/notes/:id", (req, res) => {
    // obtains id and converts to a string
    const noteId = req.params.id.toString();

    // goes into array in search of the matching id
    for (i = 0; i < db.length; i++) {
        if (db[i].id === noteId) {
            // removes deleted note from list
            db.splice(i, 1);
        }
    }
    // sends new array back to server
    res.json(db);
});

// export to server
module.exports = router;