const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');
const {performance} = require('perf_hooks');

function ReadAppend(file, appendFile){
    fs.readFile(appendFile, function (err, data) {
        if (err) throw err;
        console.log('File was read');
        fs.appendFile(file, '\n' + data, function (err) {
            if (err) throw err;
            console.log('The data was appended to file!');
        });
    });
};

// const connectionList = path.join(__dirname, `../neo4j-community-3.5.3/import/connections0.csv`);
// for (let n = 951; n < 1001; n++) {
//     let connectionBatch = path.join(__dirname, `../neo4j-community-3.5.3/import/connections${n}.csv`);
//     ReadAppend(connectionList, connectionBatch)
//     if (n === 1000) {
//         console.log('performance: ', performance.now());
//     }
// };

const connectionList = path.join(__dirname, `./csv/pg-connections.csv`);
for (let n = 1; n < 101; n++) {
    let connectionBatch = path.join(__dirname, `./csv/pg-connections${n}.csv`);
    ReadAppend(connectionList, connectionBatch)
    if (n === 100) {
        console.log('performance: ', performance.now());
    }
};