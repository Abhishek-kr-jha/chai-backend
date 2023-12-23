// require('dotenv').config({path:'./env'})

import connectDB from "./database/index.js";
import dotenv from "dotenv";
import  {app} from './app.js'

dotenv.config({
  path: "./env",
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is runninng at port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed !!",err);
})

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
