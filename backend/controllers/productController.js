import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const addProduct = asyncHandler(async (req, res, next) => {
  const { userId } = req.token;
  const { title, brand, product_id, MRP, seller_name, subject, writeto } =
    req.body;
  const newData = {
    title: title,
    brand: brand,
    product_id: product_id,
    MRP: MRP,
    added_by: userId,
    seller: {
      name: seller_name,
      grievanceredressal: { subject: subject, writeto: writeto },
    },
  };
  try {
    const newProduct = await Product.create(newData);
    res.json({ message: "products added", data: newProduct });
  } catch (err) {
    next(err);
  }
});

export { addProduct };
