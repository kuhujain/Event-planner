import dotenv from "dotenv";
dotenv.config();

import express, { request, response } from 'express';
import morgan from "morgan";
import cors from 'cors';
import connectDB from "./src/config/db.js";
import Authrouter from "./src/router/authroutes.js";
import UserRouter  from"./src/router/userroutes.js";
import cookieParser from "cookie-parser";
import cloudinary from "./src/config/cloudinary.js"




 const app=express();
 app.use(cors({origin:"http://localhost:5173",credentials:true}))
 app.use(express.json());
 app.use(cookieParser());
 app.use (morgan("dev"));
 app.use("/auth",Authrouter)
 app.use("/user",UserRouter)
 
 app.get("/",(request,response)=>{
    response.json({message:"mai server hu"})
 })
 app.use((err,req,res,next)=>{
    const errorMessage=err.message||"Internal Server Error"
    const errorCode=err.statusCode|| 500
    res.status(errorCode).json({message:errorMessage})
 })

const port=process.env.PORT||5000

 app.listen(port,async()=>{
    console.log("server started",port);
    connectDB();
    try{
      await connectDB();
      await cloudinary.api.resources({max_results:1})
      console.log("cloudinary connected")
    }
    catch(error){
      console.log("error");
      process.exit(1);
    }
  
 });
