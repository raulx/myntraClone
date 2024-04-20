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
    if (field === "specifications" || field === "product_details") {
      // while updating specifications ,updated_value must be a json object in this format {key,value} where key is actually the field that needs to be updated.
      // while updating product_details,updated_value must be a json object in this format {key:[]} where key is actually the field that needs to be updated.
      let parsed_updated_value;

      // validate updated_value as a json
      try {
        parsed_updated_value = JSON.parse(updated_value);
      } catch (err) {
        res.status(400);
        throw new Error("BAD REQUEST");
      }

      updatedData = await Product.findOneAndUpdate(
        { product_id: product_id },
        { [field]: { [parsed_updated_value.key]: parsed_updated_value.value } },
        { new: true }
      );
    } else {
      // edgecase: validate if invalid field is sent in request.
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
