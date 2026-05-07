import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
