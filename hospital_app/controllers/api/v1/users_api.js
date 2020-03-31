const User = require('../../../models/doctor');
const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const jwt = require('jsonwebtoken');

module.exports.register = async function(req,res){
    
    
    if(!req.body.name||!req.body.email || !req.body.password){
        
        return res.json(200,{message:"Please fill all the required fields"});
    }
    try{
        // check email
        await User.findOne({
            email:req.body.email
        },function(err, user){
            if(err){
                return res.json(400,{
                    message:"USername already taken"
                });
            }
            // if email id exists then make the user choose a different ID
            if(!user){
                User.create({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                });
                return res.json(200,{
                    message:"doctor created successfully"
                
                });
            }
        });
    }
    catch(err){
        return res.json(400,{
            data:{
                message:"Error in creating user"
            }
        });
    }
}

module.exports.login = async function(req,res){
    // fill up all the details
    if(!req.body.email || !req.body.password){
        return res.json(400,{
            message:"fill all fields"
        });
    }
    try{
        // find the doctor
        const doctor = await User.findOne({email:req.body.email});
        
        // check if credential are good or not
        if(!doctor||doctor.password!= req.body.password){
            return res.json(422,{
                message:"Either email or password is incorrect"
            });
        }
        return res.json(200,{
            message:"Sign in successful",
            //create a JSON token to verify the user later 
            token:jwt.sign(doctor.toJSON(),"hospital",{expiresIn:'1h'})
        });
    }
    catch(err){
        return res.json(500,{
            message:"Error in logging in, Internal server error"
        });
    }
}

module.exports.registerPatient = async function(req,res){
    // fill up all the details
    if(!req.body.name|| !req.body.phone){
        return res.json(400,{
            message:"Fill All the fields"
        })
    }

    try{
        
        // find if the patient already exists or not
        const patient = await Patient.findOne({phone:req.body.phone});
        // return all the details if patients exsists
        if(patient){
            return res.json(200, {patient:patient});
        }   
        //find the doctor who is logged in
        const doctor = await User.findById({_id:req.user});
        // register a new patient
        const newPatient = await Patient.create({
            name:req.body.name,
            phone:req.body.phone,
            doctor:req.user,
        });
        return res.json(200,{
            message:"Congrats!! you just created a patient"
        });
    }
    catch(err){
        return res.json(500,{
            message:"Internal server Error"
        });
    }
}