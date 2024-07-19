const express = require('express');
const app = express();


// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('Database Created.');
}

/*const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/testdb');
const db = mongoose.connection;
db.on('error',(err) =>{
    console.log(err);
});
db.once('open',() =>{
    console.log('Database Created.');
});
*/
// Define schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Compile model from schema
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
const temp = mongoose.modelNames();
console.log(temp);
app.get('/', (req, res) => {

    res.send(temp);
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');

});
