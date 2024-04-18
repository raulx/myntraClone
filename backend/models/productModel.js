import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  product_id: { type: Number, required: true, unique: true },
  added_by: String,
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
  product_details: {
    product_design_details: [],
    product_story: String,
    size_and_fit: [],
    material_and_care: [],
  },
  specifications: {
    fabric: String,
    fit: String,
    length: String,
    multipackset: String,
    neck: String,
    numberofitems: Number,
    occassion: String,
    pattern: String,
    patterncoverage: String,
    printorpatterntype: String,
    sleevelength: String,
    sleevestyling: String,
    sustainable: String,
    washcare: String,
    weavetype: String,
  },
  MRP: { type: Number, required: true },
  seller: {
    name: { type: String, required: true },
    grievanceredressal: {
      subject: { type: String, required: true },
      writeto: { type: String, required: true },
    },
  },
  images: [],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
