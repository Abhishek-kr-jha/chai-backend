// require('dotenv').config({path:'./env'})

import connectDB from "./database/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB();

/*
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERRR:",error);
            throw error
        })
        
        app.listen(process.env.PORT,()=>{
            console.log(`App is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:",error)
        throw err
        
    }

})()
*/
