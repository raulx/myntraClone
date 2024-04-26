import express from "express";
import {
  loginAdmin,
  registerAdmin,
  getAllProducts,
} from "../controllers/adminController.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
const adminRouter = express.Router();

adminRouter.route("/login").post(loginAdmin);

adminRouter.route("/register").post(registerAdmin);
adminRouter.route("/products/getproducts").get(verifyAdmin, getAllProducts);

export default adminRouter;
