const User = require('../../../models/doctor');
const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const jwt = require('jsonwebtoken');

module.exports.register = async function(req,res){
    if(!req.body.name||!req.body.email || !req.body.password){
        return res.json({message:"Please fill all the required fields"});
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
    if(!req.body.email || req.body.password){
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
            token:jwt.sign(user.toJSON(),"hospital",{expiresIn:'1h'})
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
        // check if status written by the doctor is actually a valid one
        if(!Report.schema.path('status').enum.includes(req.body.status)){
            return res.json(400, {
                message:" please give the status as from the following" + Report.schema.path('status').enum
            })
        }
        
        // find if the patient already exists or not
        const patient = await Report.findOne({phone:req.body.phone});
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
        // push the new patient into the patient array of doctors
        doctor.patient.push(newPatient);
        doctor.save();

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