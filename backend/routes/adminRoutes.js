import express from "express";
import { loginAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.route("/login").post(loginAdmin);

export default adminRouter;
