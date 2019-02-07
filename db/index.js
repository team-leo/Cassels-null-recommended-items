const sqlite = require('sqlite3').verbose();
const path = require('path');
const faker = require('faker');

let db = new sqlite.Database(path.join(__dirname, "./products.db"), (err)=>{
    if(err){
        console.log("ERROR in db/index.js when connecting: "+err);
    } else {
        console.log("connected to SQLite database");
        seedData(100);
    }
});

function randomVal(){
    var vals = [];
    vals[0] = faker.commerce.productName();
    vals[1] = Math.floor((Math.random()*10))/2;
    vals[2] = Math.floor((Math.random()*Math.random()*10000));
    vals[3] = faker.commerce.price()+"";
    vals[4] = faker.image.imageUrl();
    vals[5] = Math.round(Math.random());
    return vals
}

function addRow(vals){
    db.run(`INSERT INTO merch(name, stars, reviews, price, imageUrl, prime) VALUES(?, ?, ?, ?, ?, ?)`,
    vals, (err)=>{
        if (err) {
            return console.log("ERROR after insertion attempt: "+err);
          }
    });
}

function seedData(n){
    for(i=0; i<n; i++){
        addRow(randomVal())
    }
}

module.exports = db;