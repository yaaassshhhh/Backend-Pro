import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\n MONGO DB Connected !! DB HOST: ${connectionInstance.connection.host}`)
        
    } catch(error) {
        console.error("ERROR : ", error);
        process.exit(1); // there are many process.exit codes but 1 is for uncaught fatal exception
    }
}

export default connectDB;