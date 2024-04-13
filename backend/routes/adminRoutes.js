import express from "express";
import {
  getAllProducts,
  loginAdmin,
  registerAdmin,
} from "../controllers/adminController.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

const adminRouter = express.Router();

adminRouter.route("/login").post(loginAdmin);
adminRouter.route("/allproducts").get(verifyAdmin, getAllProducts);
adminRouter.route("/register").post(registerAdmin);

export default adminRouter;
