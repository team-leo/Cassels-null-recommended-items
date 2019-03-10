const { Client } = require('pg');
const client = new Client();
const performance = require('perf_hooks');
const path = require('path');

// console.log(client);

client.connectionParameters.database = 'productsdb';
client.database = 'productsdb';

// console.log(client);

client.connect();

client.query(`COPY products(item_id,name,stars,reviews,price,imageUrl,prime)
    FROM '${path.join(__dirname, './csv/products.csv')}' DELIMITER ',' CSV HEADER`, (err, res) => {
        console.log(err ? err.stack : console.log('Copied CSV file successfully!'));
    client.end();
});