import mongoose from "mongoose";
import Product from "../models/productModel.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    throw new Error("Error connecting to server.");
    process.exit(1);
  }
};

export default connectDB;
