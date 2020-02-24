const express = require('express');
const port = 8000;
const app = express();


app.get('/',function(req,res){
    console.log(req);
    res.send('<b>Here you are!!!</b>');
});

app.listen(port, function(err){
    if(err){
        console.log('Error on running the server!!!');
    }
    console.log("server running on port: ", port);
});