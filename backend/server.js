import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import userRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorMiddleware.js";
import productRouter from "./routes/productRoutes.js";

const app = express();

dotenv.config();
connectCloudinary();

const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/product", productRouter);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api is running...");
  });
}

app.use(errorHandler);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests on port : " + port);
  });
});
