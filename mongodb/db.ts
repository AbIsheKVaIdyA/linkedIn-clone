import mongoose from "mongoose";

const connectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@linkedin-clone-abhishek-vaidya-2024.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000?directConnection=true`;

if(!connectionString){
    throw new Error("Please provide a valid connection string");
}


const connectDB = async()=>{
    if(mongoose.connection?.readyState>=1){
        return;
    }

    try{
        console.log("---- Connecting to MongoDB ----");
        await mongoose.connect(connectionString);
    }catch(error){
        console.log("Error connecting to MongoDB",error);
    }
}


