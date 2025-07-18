import mongoose from "mongoose";

const userSchema=mongoose.Schema( {
     fullName:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        required:true,
        unique:true,
     },
     password:{
        type:String,
        required:true,
     },
     phone:{
        type:String,
        required:true,
     },
     photo:{
      type:String,
      required:true,
      default:""
     },
     
    },
    {timestamps:true}
);
const User=mongoose.model("user",userSchema);

export default User;