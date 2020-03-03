const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.end("<h1>Inside the Profile</h1>");
};


//render the signIn page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"Codial|SignIn"
    });
}


//render the signUp page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"Codial|SignUp"
    });
}

//get the sign_up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({
        email:req.body.email,
    },function(err,user){
        if(err){
            console.log("error in finding user in signing up");
            return;
        }
        if(!user){
            User.create(req.body, function(err,user){
                if(err){
                    console.log("error in creating user while signing up");
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}


//sign in and create the session for the user
module.exports.createSession = function(req,res){

} 