const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../database/sample.db')

db.run('CREATE TABLE IF NOT EXISTS langs(name text)')

// db.run('INSERT INTO langs(name) VALUES(?)', ['C'], function(err){
//     if(err){
//         return console.log(err.message)
//     }
//     console.log(`A row has been inserted with rowid ${this.lastID}`)
// })

// let sql = 'SELECT * FROM langs'
// db.all(sql, [], (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     rows.forEach((row) => {
//       console.log(row.name);
//     });
//   });


db.close();