import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if(connection){
        console.log(`Connected to mongoDB Database ${connection.connection.host}`);
    }
  } catch (error) {
    console.log(error,"failed to connect with db");
    process.exit(1);
  }
};

export default connectDB;