import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route("/login").post(loginUser);
userRouter.route("/register").post(registerUser);

export default userRouter;
