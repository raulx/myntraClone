import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  type: String,
  message: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
