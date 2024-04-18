import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: String,
  title: String,
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
  discount: [],
  seller: {
    name: String,
    grievanceredressal: { subject: String, writeto: String },
  },
  images: [],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
