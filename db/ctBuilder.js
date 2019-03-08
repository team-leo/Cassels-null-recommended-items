const { Client } = require('pg');
const client = new Client();
const performance = require('perf_hooks');
const path = require('path');

// console.log(client);

client.connectionParameters.database = 'mydb';
client.database = 'mydb';


// console.log(client);

client.connect();

client.query(`COPY connections(product_id,rec_id)
    FROM '${path.join(__dirname, '/csv/pg-connections.csv')}' DELIMITER ',' CSV HEADER`, (err, res) => {
        console.log(err ? err.stack : console.log('Copied CSV file successfully!'));
    client.end();
});