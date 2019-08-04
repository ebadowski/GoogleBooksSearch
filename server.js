'use strict'

// Require and configure dotenv
require('dotenv').config();

// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// App configuration
const accio = require('./config');

// Require all routes
const routes = require('./routes');

// Initialize Express
const app = express();

// Define port
const PORT = process.env.PORT || 3001;

// Set up Express to handle data parsing
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from React app
app.use(express.static('client/build'));

// Connect to MongoDB
mongoose.connect(accio.config.mongodb.uri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
});

// Routes
app.use(routes);

// Start server
app.listen(PORT);











//////////////////////////////////////////////////////////
///////////////////    OLD CODE   ////////////////////////
//////////////////////////////////////////////////////////
// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Define API routes here

// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
