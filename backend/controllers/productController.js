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
      // while updating specifications and product_details ,updated_value must
      // be a json object in this format {field,value} where field is actually the
      // field that needs to be updated.

      // validate Subfields inside field

      const validSubFields = [
        "product_design_details",
        "size_and_fit",
        "material_and_care",
        "fabric",
        "fit",
        "length",
        "multipacket",
        "neck",
        "numberofitems",
        "occassion",
        "pattern",
        "patterncoverage",
        "printorpatterntype",
        "sleevelength",
        "sleevestyling",
        "sustainable",
        "washcare",
        "weavetype",
      ];

      try {
        const parsed_updated_value = JSON.parse(updated_value);
        if (!validSubFields.includes(parsed_updated_value.field)) {
          res.status(400);
          throw new Error("BAD REQUEST");
        } else {
          updatedData = await Product.findOneAndUpdate(
            { product_id: product_id },
            {
              [`${field}.${parsed_updated_value.field}`]:
                parsed_updated_value.value,
            },
            { new: true }
          );
        }
      } catch (err) {
        res.status(400);
        throw new Error("BAD REQUEST");
      }
    } else {
      // validate field
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
