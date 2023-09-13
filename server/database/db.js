import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://filesharing:filesharing@ac-5eyukla-shard-00-00.pbarctb.mongodb.net:27017,ac-5eyukla-shard-00-01.pbarctb.mongodb.net:27017,ac-5eyukla-shard-00-02.pbarctb.mongodb.net:27017/?ssl=true&replicaSet=atlas-yrlza8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;