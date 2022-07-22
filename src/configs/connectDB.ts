import mongoose from "mongoose";
const MONGODB_URL : string = process.env.MONGODB_URL as string;
import logEvents from "../helpers/logEvents";
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
            serverSelectionTimeoutMS: 5000,
            autoIndex: false,
        });
        console.log("Connect to MongoDB successfully!")
    } catch (error : any) {
        console.log("Connect to MongoDB failed!");
        await logEvents(error.message, module.filename)
        process.exit(1);
    }
}
export default connectDB;