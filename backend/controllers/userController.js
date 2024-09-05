const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcrypt');
const validator = require('validator');
const userModel = require('../models/userModel');



//create jwt
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}



//loginUser 

const loginUser= async(req,res)=>{

    const {email, password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user)
        {
            return res.json({success:false, message:'No account found!'});
        }

        const ismatch = await bcrypt.compare(password,user.password);
        if(!ismatch)
        {
            return res.json({success:false,message:"email or password is incorrect!"}); 
        }
        const token = createToken(user._id);
        res.json({success:true, token});
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false, message:'ERROR!'});
    }
}




//register user
const registerUser = async(req,res)=>{
        const {name,password,email} = req.body;
        try{
            //checking if user already exists
            const exists = await User.findOne({email})
            if(exists)
            {
                return res.json({success:false, message:'User already exists!'}); 
            }

            //validating email and string password
            if(!validator.isEmail(email)){
                return res.json({success:false , message:'Please enter a valid email!!'}); 
            }
            if(password.length<8)
            {
                return res.json({success:false, message:'Please enter a strong password!!'});
            }


            //hashing user password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt); 

            const newUser  = new User({
                name:name,
                email:email,
                password:hashedPassword
            });

           const user =  await newUser.save();
           const token = createToken(user._id);
           res.json({success:true, token});
        }
        catch(err)
        {
            console.log(err);
            res.json({success:false, message:'ERROR!!'});   
        }
}

module.exports = {loginUser,registerUser};