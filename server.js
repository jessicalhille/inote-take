// add required modules
const express = require("express");
const app = express();

// reads the .js files in each 
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// create server app port
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});