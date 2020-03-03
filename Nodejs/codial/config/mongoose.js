const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_development', {
    useUnifiedTopology: true,
    useNewUrlParser: true
 })
 //.then(
//     () => console.log("Connected to codial_development Database")
// ).catch(err => {
//     console.log(`Cannot Connect to the Server ${err.message}`);

// });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connecting to MongoDB"));

db.once('open', function () {
    console.log('Connected to Database:: codial_development');
});

module.exports = db;