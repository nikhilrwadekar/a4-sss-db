// DB Connection & Promise-based Query
const { query } = require("../db/promise-mysql");
const { cp } = require("../db/connection");
const mysql = require("mysql");


// GET '/api/songs'
exports.getSongs = (req, res) => {
    // Send all Songs - with Left JOIN - to include NULL
    query(cp, `SELECT songs.name song_name, albums.name album_name from songs LEFT JOIN albums ON songs.album_id = albums.album_id;`)
        .then(results => res.send(results))
        .catch(error => res.send(error));
}

// GET '/api/songs/album-songs'
exports.getAlbumSongs = (req, res) => {
    query(cp, `SELECT * from songs_on_albums`)
        .then(results => res.send(results))
        .catch(error => res.send(error));
}

// POST '/api/songs'
exports.postSongs = (req, res) => {
    let songName = mysql.escape(req.body.name);
    let albumID = req.body.album_id == 0 ? "NULL" : mysql.escape(req.body.album_id);

    let insertSongQuery = `INSERT INTO songs(name,album_id) VALUES (${songName},${albumID})`;
    query(cp, insertSongQuery)
        .then(results => console.log(`Success: ${insertSongQuery}`))
        .catch(error => { console.log(error); });
}
