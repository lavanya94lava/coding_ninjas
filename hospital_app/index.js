const express = require('express');
const app = express();
const port = 8000;

//connection to mongoDB
const db = require('./config/mongoose');

//this contains all the routes 
app.use('/',require('./routes'));

//use this middleware to read the urlencoded values
app.use(express.urlencoded());


//connect your server
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server${err}`);
    }
    console.log(`Server is running on port ${port}`);
});