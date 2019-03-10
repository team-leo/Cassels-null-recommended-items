const fs = require('fs');
const path = require('path');
const os = require('os');
const {performance} = require('perf_hooks');

let start = 1;
let end = 100001;

for (let n = 1; n < 101; n++) {
connections = [];
    for (let j = start; j < end; j++) {
        relatedItems = [];
        for (let k = 0; k < 5; k++) {
            const row = [];
            row.push(j);
            let related = Math.floor(Math.random() * (end - start) + start);
            if (related !== j && !relatedItems.includes(related)) {
                row.push(related);
                relatedItems.push(related);
                // row.push('IS_RELATED_TO');
                connections.push(row);
            }
        }
    }
    start = start + 100000;
    end = end + 100000;
fs.writeFileSync(path.join(__dirname, `./csv/pg-connections${n}.csv`), connections.join(os.EOL));
}
console.log('performance: ', performance.now());