import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGO_URI;
const connectdb = async() => {

  try{
    await mongoose.connect(URI);
    console.log('Database Connected');
  }
  catch(err){
    console.log("error:",err);
    process.exit(1);
  }
};

export default connectdb; 
