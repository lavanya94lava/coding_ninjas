const jwt = require('jsonwebtoken');

//use jwt to authenticate the user, 
module.exports.authenticate = function(req,res,next){
    if(req.headers.token){
        try {
            const token = jwt.verify(req.headers.token,"hospital");
            req.user = token._id;
            console.log(req.user);
            next();
        } catch (err){
            return res.json(400,{
                message:"invalid token"
            })
        }
    }else{
        return res.json(400,{
            message:"route is protected"
        })
    }
}