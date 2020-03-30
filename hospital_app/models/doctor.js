const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    patients:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report'
    }]
}, {
    timestamps:true
});

const User = mongoose.model("Doctor", userSchema);
module.exports = User;