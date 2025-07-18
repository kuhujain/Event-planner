import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import genToken from "../utils/auth.js";



export const RegisterUser=async(req,res,next)=>{
   try{
    const{fullName,email,phone,password}=req.body;

   if(!fullName||!email||!phone||!password){
    const error=new Error("ALL FEILD REQUIRED");
    error.statusCode=400;
    return next(error);
   }
   const existingUser=await User.findOne({email})
   if (existingUser){
    const error=new Error("Already Registered");
    error.statusCode=409;
    return next(error);
   }
 const hashedPassword=await bcrypt.hash(password,10);
const profilePic=`https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase}`
   const newUser=await User.create({
    fullName,
    email,
    phone,
    password:hashedPassword,
    photo:profilePic,
})
 res.status(201).json({message:"Registration Successful"})
   }
   catch(error){
    next(error);
   }
};







export const loginUser=async(req,res,next)=>{
    try{
     const{email,password}=req.body;
     if(!email||!password){
       const error=new Error("ALL FEILD REQUIRED");
       error.statusCode=400;
      return next(error);
     }

  const user=await User.findOne({email})
   if (!User){
    const error=new Error("User Not Registered");
    error.statusCode=400;
    return next(error);
   }
   const isVerified =await bcrypt.compare(password,user.password)
    if(!isVerified){
      const error=new Error("Invalid user or Password");
      error.statusCode=401;
    return next(error);
    }
    genToken(user._id,res);
    
    res.status(200).json ({message:`Welcome Back ${user.fullName}`,data:user})



    }catch(error){
      next(error);
    }
};







export const logoutUser=(req,res)=>{
    
}


export const updateUser=(req,res)=>{
   
}