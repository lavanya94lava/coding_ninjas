const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('assets'));

app.use(expressLayouts);


//extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});