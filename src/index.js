import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
});
connectDB();












/*      --------APPROACH #1 (For DB Connection establishment)--------

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        //we might have connected the database but sometime our express app is unable to connect to the database
        //so we need to check if the connection is successful or not by using LISTENERS
        app.on("error" , (error) => {
            console.log("App failed to connect to the database");
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        });
        
    } catch (error) {
        console.error("ERROR : ",error)
    }
})()

*/

