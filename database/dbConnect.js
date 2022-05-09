import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import 'dotenv/config.js';

const dbConnection = () => {
    const dbUri = process.env.DB_URI;
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
