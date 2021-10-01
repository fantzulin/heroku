var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            time text, 
            food text UNIQUE, 
            CONSTRAINT food_unique UNIQUE (food)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (time, food) VALUES (?,?)'
                db.run(insert, ["dinner","milk"])
                db.run(insert, ["dinner","pizza"])
            }
        });  
    }
});


module.exports = db