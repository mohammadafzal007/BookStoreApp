import express from "express";
import { getBook } from "../Controller/book.controller.js";

const router=express.Router();

// defining routes
router.get("/",getBook);
console.log(router)
export default router;













