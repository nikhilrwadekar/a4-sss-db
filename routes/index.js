// Express and Express Router
const express = require('express');
const router = express.Router();

// Songs and Album Routes
const songRouter = require('./songs.js');
const albumRouter = require('./albums.js');

// Use routes in the following format
router.use('/songs', songRouter);
router.use('/albums', albumRouter);

// Export the Router
module.exports = router;