const { Client } = require('pg');
const client = new Client();
const performance = require('perf_hooks');
const path = require('path');

// console.log(client);

client.connectionParameters.database = 'mydb';
client.database = 'mydb';


// console.log(client);

client.connect();

client.query(`SELECT rec_id
    FROM connections WHERE product_id = '2'`, (err, res) => {
        console.log(err ? err.stack : console.log(res.rows));
    client.end();
});