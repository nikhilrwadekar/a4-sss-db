const express = require("express");
const app = express();
var cors = require('cors');

app.use(cors());

app.listen(8080, () => {
    console.log("Listening on port 8080!");
})

// Static Middleware to serve the public folder as is
app.use(express.static('public'))

// Use JSON - This will allow you to work with req.body
app.use(express.json());

// Code by Jordan Miller
const router = require('./routes/index.js');
app.use('/api', router);
