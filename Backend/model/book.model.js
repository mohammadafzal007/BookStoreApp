import mongoose from "mongoose";

//database schema
const bookSchema=new mongoose.Schema({
name:String,
price:Number,
category:String,
title:String,
image:String,
type:String
})

//creating database model or collection
const Book=mongoose.model("Book",bookSchema);


export default Book;
