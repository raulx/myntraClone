import express from "express";
import {
  addProduct,
  loginAdmin,
  registerAdmin,
} from "../controllers/adminController.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

const adminRouter = express.Router();

adminRouter.route("/login").post(loginAdmin);
adminRouter.route("/product/add").post(verifyAdmin, addProduct);
adminRouter.route("/register").post(registerAdmin);

export default adminRouter;
