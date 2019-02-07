const sqlite = require('sqlite3').verbose();
const path = require('path');
const faker = require('faker');

let db = new sqlite.Database(path.join(__dirname, "./products.db"), (err)=>{
    if(err){
        console.log("ERROR in db/index.js when connecting: "+err);
    } else {
        console.log("connected to SQLite database");
    }
});

// db.run(`INSERT INTO merch(name, stars, reviews, price, imageUrl, prime) VALUES(?, ?, ?, ?, ?, ?)`,
// ['Black Pants', 4.5, 1337, "$41.99", 'https://images-na.ssl-images-amazon.com/images/I/31VU-ryYsML._AC_UL260_SR200,260_.jpg', 0], function(err) {
//     if (err) {
//       return console.log("ERROR after insertion attempt: "+err);
//     }
//     // get the last insert id
//     console.log(`A row has been inserted with rowid ${this.lastID}`);
// });

var vals = ['Brown Pants', 4.5, 1337, "$41.99", 'https://images-na.ssl-images-amazon.com/images/I/31VU-ryYsML._AC_UL260_SR200,260_.jpg', 0]
vals[0] = faker.commerce.productName();
vals[1] = Math.floor((Math.random()*10))/2;
vals[2] = Math.floor((Math.random()*Math.random()*10000));

function randomVals(vals){
    vals[0] = faker.fake.name;
}

function addRow(vals){
    db.run(`INSERT INTO merch(name, stars, reviews, price, imageUrl, prime) VALUES(?, ?, ?, ?, ?, ?)`,
    vals, (err)=>{
        if (err) {
            return console.log("ERROR after insertion attempt: "+err);
          }
          // get the last insert id
          //console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
}

addRow(vals);