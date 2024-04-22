import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  product_id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  ratings: {
    total: { type: Number, default: 0 },
    stars: {
      1: { type: Number, default: 0 },
      2: { type: Number, default: 0 },
      3: { type: Number, default: 0 },
      4: { type: Number, default: 0 },
      5: { type: Number, default: 0 },
    },
  },
  product_story: { type: String, default: "Unknown" },

  product_details: {
    product_design_details: { type: String, default: "Unknown" },
    size_and_fit: { type: String, default: "Unknown" },
    material_and_care: { type: String, default: "Unknown" },
  },
  specifications: {
    fabric: { type: String, default: "Unknown" },
    fit: { type: String, default: "Unknown" },
    length: { type: String, default: "Unknown" },
    multipackset: { type: String, default: "Unknown" },
    neck: { type: String, default: "Unknown" },
    numberofitems: { type: Number, default: 0 },
    occassion: { type: String, default: "Unknown" },
    pattern: { type: String, default: "Unknown" },
    patterncoverage: { type: String, default: "Unknown" },
    printorpatterntype: { type: String, default: "Unknown" },
    sleevelength: { type: String, default: "Unknown" },
    sleevestyling: { type: String, default: "Unknown" },
    sustainable: { type: String, default: "Unknown" },
    washcare: { type: String, default: "Unknown" },
    weavetype: { type: String, default: "Unknown" },
  },
  MRP: { type: Number, required: true },
  images: [],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
