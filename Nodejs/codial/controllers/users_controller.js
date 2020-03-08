const User = require('../models/user');

module.exports.profile = function(req,res){
    User.findById(req.params.id,function(err,user){
        return res.render('user_profile',{
            title: 'User Profile',
            profile_user:user
        });
    })
};


//render the signIn page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title:"Codial|SignIn"
    });
}


//render the signUp page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
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
    req.flash('success','Logged In Successfully');
    return res.redirect('/');
} 


//signout function
module.exports.destroySession = function(req,res){
    req.logout();
    req.flash('success','You are logged out');
    return res.redirect('/');
}


module.exports.update = function(req,res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, {name:req.body.name, email:req.body.email},function(err,user){
            return res.redirect('back');
        })
    }else{
        return res.status(401).send('Unauthorized');
    }
}