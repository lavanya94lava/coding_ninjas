const mongoose = require('mongoose'); // the instance of mongoose remains the same everywhere. 

//this contains the Schema or in simple words, our fields that would be rendered.
const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

//model name is how it would appear the database and second argument of model contains the Schema of our fields.
const toDoList = mongoose.model('toDoList',taskSchema);

// this exports the file, for example when this file would be accessed outside this would be the point of contact with the outside functionalities.Although there can be multiple exports from the same file.
module.exports = toDoList;