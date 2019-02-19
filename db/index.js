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
    vals[1] = Math.ceil((Math.random()*10))/2;
    vals[2] = Math.floor((Math.random()*Math.random()*10000));
    vals[3] = faker.commerce.price()+"";
    //vals[4] = faker.image.imageUrl();
    vals[4] = randomImg();
    vals[5] = Math.round(Math.random());
    return vals
}

var imgLinks = [
    "https://drive.google.com/file/d/1X9f8NovT68ABI2aQg5L5KnBG7Cw3kJm2/preview",
    "https://drive.google.com/file/d/1-fV_MpqcTUOXBFy_tDPn7PH9mPPaXk6p/preview",
    "https://drive.google.com/file/d/1jrthgaxzc836jqk1TlHc_Zmx0QD-AkoX/preview",
    "https://drive.google.com/file/d/1PUvKjhsHS06wRZZx2XTHsgZG8_X0fMtY/preview",
    "https://drive.google.com/file/d/1N6g_Xgvqw6REAF2qpxvBmDmhm-eIFBZT/preview",
    "https://drive.google.com/file/d/1CMuCz5LVSp0tgqGaLFwvTlYg1YQ8tScS/preview",
    "https://drive.google.com/file/d/1PHu-vnK23ZN6ifAK95j83yIlCj0jCXH5/preview",
    "https://drive.google.com/file/d/1x3z-oEsK-GCR5XXeLNb89qpwdubm8K3O/preview",
    "https://drive.google.com/file/d/1xnjP6VZoC2ql3D9WVAPL1MRpOTk-ngQE/preview",
    "https://drive.google.com/file/d/1L1rZvp7MrBwH3oyDRja36rmS-UNfLu8N/preview"
];

function randomImg () {
    console.log(Math.floor((imgLinks.length) * Math.random() ));
    return( imgLinks[(Math.floor((imgLinks.length) * Math.random() ))]);
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