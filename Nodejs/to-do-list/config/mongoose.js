const mongoose = require('mongoose');

//make a connection to the database and also define the name of database
mongoose.connect('mongodb://localhost/to_do_db');

//verify the connection and acquire the connection
const db = mongoose.connection;


//if there is an error in connecting to the DB
db.on('error',console.error.bind(console,'error connecting to db'));


//if you are connected to the DB then success message is shown
db.once('open',function(){
    console.log("Successfully connected to the Database");
});