const fs = require('fs');
const path = require('path');
const os = require('os');
const {performance} = require('perf_hooks');



function ReadAppend(file, appendFile){
    fs.readFile(appendFile, function (err, data) {
        if (err) throw err;
        fs.appendFile(file, '\n' + data, function (err) {
        if (err) throw err;
        });
    });
};
const productList = path.join(__dirname, `../neo4j-community-3.5.3/import/products-header.csv`);

for (let n = 1; n < 1001; n++) {
    let productBatch = path.join(__dirname, `../neo4j-community-3.5.3/import/products${n}.csv`);
    ReadAppend(productList, productBatch)
    if (n === 1000) {
        console.log('performance: ', performance.now());
    }
}

