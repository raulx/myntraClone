import Admin from "../models/adminModel.js";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import generateAdminToken from "../utils/generateToken.js";
import { v2 as cloudinary } from "cloudinary";

const addNewProduct = asyncHandler(async (req, res, next) => {
  const { title, brand, product_id, MRP } = req.body;
  const newData = {
    title: title,
    brand: brand,
    product_id: product_id,
    MRP: MRP,
  };
  try {
    const newProduct = await Product.create(newData);
    res.json({
      message: "product added successfully",
      status: 200,
      data: newProduct,
    });
  } catch (err) {
    next(err);
  }
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  const admin = await Admin.findOne({ id: id });
  if (admin) {
    if (await admin.matchPassword(password)) {
      generateAdminToken(res, id);
      res.status(200).json({ status: 200, id: admin._id });
    } else {
      throw new Error("Password do not matched !");
    }
  } else {
    throw new Error("No User Found with this id");
  }
});

const registerAdmin = asyncHandler(async (req, res, next) => {
  const { id, password } = req.body;
  const newUserData = { id: id, password: password };
  try {
    const newUser = await Admin.create(newUserData);
    generateAdminToken(res, newUser.id);
    res.json({ message: "User created successfully", newUser });
  } catch (err) {
    next(err);
  }
});

const getAllProducts = asyncHandler(async (req, res, next) => {
  try {
    const products = await Product.find({});
    const totalProducts = await Product.countDocuments();
    res.json({
      message: "all your products are here",
      products: products,
      total: totalProducts,
    });
  } catch (err) {
    next(err);
  }
});

const getSingleProduct = asyncHandler(async (req, res, next) => {
  const { product_id } = req.query;

  try {
    const product = await Product.findOne({ product_id: product_id });
    if (product) {
      res.json({ status: 200, product: product });
    } else {
      res.json({ status: 404, message: "No Product Found!" });
    }
  } catch (err) {
    next(err);
  }
});

const addProductImage = asyncHandler(async (req, res, next) => {
  const { image_info, product_id } = req.body;

  try {
    await Product.findOneAndUpdate(
      { product_id: product_id },
      { $push: { images: image_info } }
    );
    res.json({ status: 200, message: "image saved successfully" });
  } catch (err) {
    next(err);
  }
});

const deleteProductImage = asyncHandler(async (req, res, next) => {
  const { productId, imageId, publicId } = req.body;

  try {
    await cloudinary.uploader.destroy(publicId);
    await Product.findOneAndUpdate(
      { product_id: productId },
      { $pull: { images: { asset_id: imageId } } }
    );
    res.json({ status: 200, message: "image deleted successfully" });
  } catch (err) {
    next(err);
  }
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  const { product_id } = req.body;

  try {
    // first destroy the images stored in the cloud(cloudinary).
    const { images } = await Product.findOne(
      { product_id: product_id },
      "images"
    );

    for (const image of images) {
      await cloudinary.uploader.destroy(image.public_id);
    }

    await Product.findOneAndDelete({
      product_id: product_id,
    });
    res.json({ message: "product deleted successfully", status: 200 });
  } catch (err) {
    next(err);
  }
});

const dynamicProductSearchById = asyncHandler(async (req, res, next) => {
  const { product_id } = req.query;

  let products;
  console.log(product_id);
  if (product_id === "") {
    products = await Product.find({}).limit(15);
  } else {
    const queryId = Number(product_id);

    const regExp = new RegExp(queryId);

    products = await Product.find({
      $expr: {
        $regexMatch: {
          input: { $toString: `$product_id` },
          regex: regExp,
        },
      },
    });
  }

  res.json({ status: 200, products: products });
});

export {
  loginAdmin,
  registerAdmin,
  getAllProducts,
  getSingleProduct,
  addProductImage,
  deleteProductImage,
  addNewProduct,
  deleteProduct,
  dynamicProductSearchById,
};
