import mongoose from "mongoose";


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect('mongodb+srv://shreerakshamrao:y7T9EK8wQoDr6yjp@cluster0.jrblrng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`\nMONGODB CONNECTED !! DB HOST : ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB CONNECTION FAILED:\n", error)
        process.exit(1)
    }
}

export default connectDB