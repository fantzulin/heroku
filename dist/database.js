var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE food (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT, 
            name TEXT, 
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO food (type, name) VALUES (?,?)'
                db.run(insert, ["breakfast","鹽味奶油麵包"])
                db.run(insert, ["lunch","玉米蛋蔥抓餅"])
                db.run(insert, ["dinner","韓式飯"])
            }
        });  
    }
});


module.exports = db