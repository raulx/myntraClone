import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests on port : " + port);
  });
});
