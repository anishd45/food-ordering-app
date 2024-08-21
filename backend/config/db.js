import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose
    .connect("mongodb+srv://anish12:@anishAA@cluster0.8ujve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("MongoDB Connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}
//mongodb+srv://anish12:@anishAA@cluster0.8ujve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0