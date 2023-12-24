import { response } from "express";
import { asynHandler } from "../utils/asynchandler.js";

const registerUser = asynHandler( async (req,res)=>{
     response.status(200).json({
        message:"Ok"
    })
})

export {registerUser}