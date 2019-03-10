const fs = require('fs');
const path = require('path');
const os = require('os');
const {performance} = require('perf_hooks');

let start = 1;
let end = 10001

for (let n = 1; n < 1001; n++) {
const connections = [];
    for (let j = start; j < end; j++) {
        relatedItems = [];
        const row = [];
        for (let k = 0; k < 8; k++) {
            let related = Math.floor(Math.random() * (end - start) + start);
            if (related !== j && !relatedItems.includes(related)) {
                row.push(related);
                relatedItems.push(related);
            }
        }
        connections.push(row);
        if (j === 10000000) {
            console.log(performance.now());
        }
    }
    start = start + 10000;
    end = end + 10000;
    fs.writeFileSync(path.join(__dirname, `csv/connections${n}.csv`), connections.join(os.EOL));
}
