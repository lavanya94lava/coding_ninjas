const mongoose = require("mongoose");

//make your DB
mongoose.connect(`mongodb://localhost/hospital_db`);

//Connect it
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in Connecting to the MongoDB"));

//veruify it
db.once('open', function(){
    console.log("Connected to Database:: hospital_db");
});

module.exports = db;