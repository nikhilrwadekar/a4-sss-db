// DB Connection & Promise-based Query
const {query} = require("../db/promise-mysql");
const {cp} = require("../db/connection");
const mysql = require("mysql");


// GET '/api/songs'
exports.getSongs = (req,res)=>{
// Send all Albums
    query(cp,`SELECT * from songs`)
        .then(results => res.send(results))
        .catch(error => res.send(error));
}

// GET '/api/album-songs'
exports.getAlbumSongs = (req,res)=>{
res.send('get album songs!');
}

// POST '/api/songs'
exports.postSongs = (req,res)=>{
 
}
