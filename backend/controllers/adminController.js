import Admin from "../models/adminModel.js";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import generateAdminToken from "../utils/generateToken.js";

const loginAdmin = asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  const admin = await Admin.findOne({ id: id }).select("-_id");
  if (admin) {
    if (await admin.matchPassword(password)) {
      generateAdminToken(res, id);
      res.status(200).json({ status: 200, admin });
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
    res.json({ message: "here is your product", product: product });
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
  const { productId, imageId } = req.body;

  try {
    await Product.findOneAndUpdate(
      { product_id: productId },
      { $pull: { images: { asset_id: imageId } } }
    );
    res.json({ status: 200, message: "image deleted successfully" });
  } catch (err) {
    next(err);
  }
});
export {
  loginAdmin,
  registerAdmin,
  getAllProducts,
  getSingleProduct,
  addProductImage,
  deleteProductImage,
};
