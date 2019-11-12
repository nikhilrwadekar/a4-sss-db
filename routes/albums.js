// Express and Express Router
const express = require('express');
const router = express.Router();

// Get Handler Functions
const {getAlbums, postAlbums} = require("../controllers/albumController");

// GET '/api/albums' sends an array of albums - using albumController;
router.get('/', getAlbums);

// POST '/api/albums' creates a new album;
router.post('/', postAlbums);

// Export the Router
module.exports = router;

