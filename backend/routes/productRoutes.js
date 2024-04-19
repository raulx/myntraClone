import express from "express";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import { addProduct } from "../controllers/productController.js";
const productRouter = express.Router();

productRouter.route("/add").post(verifyAdmin, addProduct);

export default productRouter;
