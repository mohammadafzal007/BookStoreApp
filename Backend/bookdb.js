import dotenv from "dotenv";
import Book from "./model/book.model.js"
import bookJson from "./books.json"  assert { type: "json" };
import connectDB from "./connectDB.js";
dotenv.config();
const MONGODB_URL=process.env.MONGODBURI;

const start=async ()=>{

  try {
    await connectDB(MONGODB_URL);
    await Book.deleteMany();
    await Book.create(bookJson);
    console.log("Success")
  } catch (error) {
    console.log("Error : ",error.message);
  } 
 
}

start();

