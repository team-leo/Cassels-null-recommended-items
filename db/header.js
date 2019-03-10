const fs = require('fs');
const path = require('path');
const os = require('os');
const {performance} = require('perf_hooks');

const productOutput = [['id:ID','name','stars','reviews:int','price','imageUrl','prime:int',':LABEL']];
fs.writeFileSync(path.join(__dirname, `../neo4j-community-3.5.3/import/products-header.csv`), productOutput.join(os.EOL));

const relationshipOutput = [[':START_ID',':END_ID',':TYPE']];
fs.writeFileSync(path.join(__dirname, `../neo4j-community-3.5.3/import/relationships-header.csv`), relationshipOutput.join(os.EOL));

console.log('performance: ', performance.now());