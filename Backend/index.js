//importing
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";
import cors from "cors";        //middleware 
import connectDB from "./connectDB.js";
const app = express();

//dotenv configuration
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI=process.env.MONGODBURI;

app.use(cors());
app.use(express.json())
//connecting database


app.use("/book",bookRoute);
app.use("/user",userRoute);
//express server
const start=async ()=>{

  try{
    await connectDB(URI);
     app.listen(PORT, () => {
       console.log(`Server is listening on port ${PORT}`)
      })
      
    }
    catch(error)
    {
      console.log("Error",error);
    }
  //server listening on port
 
}


start();