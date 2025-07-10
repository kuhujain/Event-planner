import express from "express";
import { GetProfile } from "../controller/usercontroller.js";
import { Protect } from "../middleware/authMiddleware.js";
const router=express.Router();

router.get("/profile",Protect ,GetProfile);


export default router;