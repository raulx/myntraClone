import express from "express";
import {
  loginAdmin,
  registerAdmin,
  getAllProducts,
  getSingleProduct,
  addProductImage,
  deleteProductImage,
} from "../controllers/adminController.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import { addNewProduct } from "../controllers/adminController.js";
const adminRouter = express.Router();

adminRouter.route("/login").post(loginAdmin);

adminRouter.route("/register").post(registerAdmin);
adminRouter.route("/products/getAllProducts").get(verifyAdmin, getAllProducts);
adminRouter
  .route("/products/getSingleProduct")
  .get(verifyAdmin, getSingleProduct);

adminRouter
  .route("/products/addProductImage")
  .post(verifyAdmin, addProductImage);

adminRouter
  .route("/products/deleteImage")
  .delete(verifyAdmin, deleteProductImage);

adminRouter.route("/products/addNewProduct").post(verifyAdmin, addNewProduct);
export default adminRouter;
