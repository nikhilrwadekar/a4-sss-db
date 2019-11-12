// DB Connection & Promise-based Query
const {query} = require("../db/promise-mysql");
const {cp} = require("../db/connection");
const mysql = require("mysql");

// GET '/api/albums'
exports.getAlbums = (req,res)=>{
    // Send all Albums
    query(cp,`SELECT * from albums`)
        .then(results => res.send(results))
        .catch(error => res.send(error));
}

// POST '/api/albums'
exports.postAlbums = (req,res)=>{
     let albumName = mysql.escape(req.body.name);
     let albumGenre = mysql.escape(req.body.genre);
     
     let insertAlbumQuery = `INSERT INTO albums(name,genre) VALUES (${albumName},${albumGenre})`;
     query(cp,insertAlbumQuery)
        .then(results => console.log(results))
        .catch(error => {console.log(error);});
}