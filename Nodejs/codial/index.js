const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

app.use('/',require('./routes'));

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});