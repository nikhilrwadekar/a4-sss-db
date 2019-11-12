// Express and Express Router
const express = require('express');
const router = express.Router();

// Get Handler Functions
const {getSongs, getAlbumSongs, postSongs} = require("../controllers/songController");

// GET '/api/songs' sends an array of songs; each song also has the name of the album it belongs to;
router.get('/', getSongs);

// GET '/api/songs/album-songs' sends an array of only those songs that belong to an album. Songs without an album are not sent. Also, the name of the album of each song is not included.
router.get('/album-songs', getAlbumSongs);

// POST '/api/songs' create a new song.
router.post('/', postSongs);

// Export the Router
module.exports = router;