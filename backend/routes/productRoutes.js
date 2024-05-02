import express from "express";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import { editProduct } from "../controllers/productController.js";
const productRouter = express.Router();

productRouter.route("/edit").patch(verifyAdmin, editProduct);

export default productRouter;
