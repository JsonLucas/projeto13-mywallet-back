import { MongoClient, ServerApiVersion } from "mongodb";
import { dbUri } from "../dot-env.js";
import mongoose from "mongoose";

const dbConnection = () => {
    try{
        mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection.on('error', (e) => {
            console.log(e);
        }).once('open', () => {
            console.log('database connected');
        });
    }catch(e){
        console.log(e.message);
    }
}

export default dbConnection;
