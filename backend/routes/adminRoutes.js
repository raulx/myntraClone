import express from "express";
import { loginAdmin, registerAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.route("/login").post(loginAdmin);

adminRouter.route("/register").post(registerAdmin);

export default adminRouter;
