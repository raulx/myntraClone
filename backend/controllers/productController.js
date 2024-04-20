import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const addProduct = asyncHandler(async (req, res, next) => {
  const { userId } = req.token;
  const { title, brand, product_id, MRP } = req.body;
  const newData = {
    title: title,
    brand: brand,
    product_id: product_id,
    MRP: MRP,
    added_by: userId,
  };
  try {
    const newProduct = await Product.create(newData);
    res.json({ message: "products added", data: newProduct });
  } catch (err) {
    next(err);
  }
});

const editProduct = asyncHandler(async (req, res, next) => {
  const { product_id, field, updated_value } = req.body;

  try {
    let updatedData;

    switch (field) {
      case "product_details":
        updatedData = { d: "Product details changed." };
      case "specifications":
        updatedData = { d: "specifications  updated" };
        break;

      default:
        if (!Product.schema.path(field)) {
          res.status(400);
          throw new Error("BAD REQUEST:Invalid field");
        } else {
          updatedData = await Product.findOneAndUpdate(
            { product_id: product_id },
            { [field]: updated_value },
            { new: true }
          );
        }
    }

    res.json({ message: "updated successfully", updated_data: updatedData });
  } catch (err) {
    next(err);
  }
});

export { addProduct, editProduct };
