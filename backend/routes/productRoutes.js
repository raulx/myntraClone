import express from "express";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import { addProduct, editProduct } from "../controllers/productController.js";
const productRouter = express.Router();

productRouter.route("/add").post(verifyAdmin, addProduct);
productRouter.route("/edit").patch(verifyAdmin, editProduct);

export default productRouter;
