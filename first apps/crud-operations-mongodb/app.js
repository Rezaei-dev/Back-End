const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

// Connection URL & Database Name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mydatabase';

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    
    const db = client.db(dbName);

    console.log("Database created");
    // Define routes here
    
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});