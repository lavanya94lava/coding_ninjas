const mongoose = require('mongoose');

//connect to the db
mongoose.connect('mongodb://localhost/contact_list_db');

//acquire the connection(to see if it has connected or not)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

// up and running then print the message
db.once('open',function(){
    console.log('successfully connected to the db');
});