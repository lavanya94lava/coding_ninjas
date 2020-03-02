const express = require('express');
const port = 8000;
const path = require("path");


//require db
const db = require('./config/mongoose');
const Task = require('./models/task'); //require our schema from  models file, to set what all variables and its types to be sent
const app = express();// start the server.

app.set("view engine", "ejs"); // set the view engine of our server
app.set("views", path.join(__dirname, 'views')); 
app.use(express.static('assets')); // this is a middleware to access static file like css, images and JS files.
app.use(express.urlencoded()); // this is a middleware to parse incoming requests with URL encoded payloads.


//this request fetches the data from the database and then uses EJS view engine to finally render our page
app.get('/', function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            console.log('Error in fetching records from Database');
            return;
        }
        return res.render('home', { 
            title: "EJS",
            task_list:tasks
        });
    });
});


//this request posts the data on a particular route and the data that is sent is used to create our entries in database
app.post('/create-task', function (req, res) {
    if(req.body.task==""||req.body.category==""||req.body.dueDate==""){
        return res.redirect('back');
    }
    Task.create({
        task: req.body.task,
        dueDate: req.body.dueDate,
        category: req.body.category
    }, function (err, newTask) {
        if (err) {
            console.log('error in creating a task');
            return;
        }
        console.log('@@@@@@@', newTask);
        res.redirect('back');//server response redirects you back to /, where you fetch the updated data from the database.
    });
});


//this request posts the data on /delete-task route and that data is used for deleting the entries from database based on ID
app.post('/delete-task',function(req,res){
    var body = req.body.checkbox_array;
    console.log("body", body);
    for(let i=0;i<body.length;i++){
        let id = body[i];
        Task.findByIdAndDelete(id,function(err){
            if(err){
                console.log("couldn't delete the task");
                return;
            }
        });
    }
    return res.redirect('/'); //server response redirects you back to /, where you fetch the updated data from the database.
})


//listen to the port, if our server has been rendered or not?
app.listen(port, function (err) {
    if (err) {
        console.log('Error while running this server');
    }
    else {
        console.log(__dirname);
        console.log(`Your server is running on port ${port}`);
    }
});

