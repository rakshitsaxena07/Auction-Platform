

import { config } from "dotenv";
config({ path: "./config.env" });
console.log("Mongo URI:", process.env.MONGO_URI); 

import mongoose from "mongoose"

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName: "MERN_AUCTION_PLATFORM",
}).then(()=>{
    console.log("Connected to database.");
}).catch((err)=>{
    console.log(`Some error occured while connecting database  ${err}`);
});

};