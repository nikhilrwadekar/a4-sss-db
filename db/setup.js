const { query } = require("./promise-mysql");
const { cp } = require("./connection");

// Setup Music DB!
query(cp, "DROP TABLE IF EXISTS songs;")
    .then(results => query(cp, "DROP TABLE IF EXISTS albums;"))
    .then(results => query(cp, "CREATE TABLE albums(album_id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, genre varchar(255),PRIMARY KEY (album_id));"))
    .then(results => query(cp, "CREATE TABLE songs(song_id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, album_id int DEFAULT NULL, PRIMARY KEY (song_id), FOREIGN KEY (album_id) REFERENCES albums(album_id));"))
    .then(results => {
        console.log("Tables dropped and created again!");
        process.exit();
    })
    .catch(error => { console.log(error); });
