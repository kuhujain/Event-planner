import express from "express";
import { RegisterUser,loginUser,logoutUser,updateUser } from "../controller/authcontroller.js";
const router=express.Router();

router.post("/register",RegisterUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);
router.put("/update",updateUser);

export default router;