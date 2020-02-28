const express = require('express');
const port = 8000;
const path = require('path');

const db = require('./config/mongoose');
const Contact = require('./model/contact');
const app = express();

app.get('/',function(req,res){
    return res.render('home',{title:"EJS"});
});

app.get('/practice',function(req,res){

    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in finding contacts ');
            return;
        }
        return res.render('practice',{
            title: "practice",
            contact_list: contacts
        });
    })
});

app.use(express.urlencoded());
app.use(express.static('assets'));
app.post('/create-contact',function(req,res){

    // console.log(req.body.name);
    // contactList.push(req.body);

    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log("######",newContact);
        return res.redirect('back');

    });
});
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var contactList = [
    {
        name:"Lavanya Singh",
        phone:"1234567890"
    },
    {
        name:"Lavanya Singh",
        phone:"1234567890"
    },
    {
        name:"Lavanya Singh",
        phone:"1234567890"
    },
    {
        name:"Lavanya Singh",
        phone:"1234567890"
    }
];


//for deleting a contact from list
app.get('/delete-contact',function(req,res){
    console.log(req.query.id);
    let id = req.query.id;

    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("couldn't delete an object");
            return;
        }
    return res.redirect('back');
    });

    // let contactIndex = contactList.findIndex((contact)=> contact.phone == phone);

    // if(contactIndex!=-1){
    //     contactList.splice(contactIndex,1);
    // }
});

app.listen(port,function(err){
    if(err){
        console.log('Error in the server',err);
    }
    else{
        console.log(__dirname);
        console.log("running on port",port);
    }
});