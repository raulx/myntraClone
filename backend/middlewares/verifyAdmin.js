import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
const verifyAdmin = asyncHandler(async (req, res, next) => {
  const token = req.cookies._adt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_ADT_SECRET);
      req.token = decoded;
      next();
    } catch (err) {
      throw new Error("Invalid token !");
    }
  } else {
    throw new Error("Token Expired !");
  }
});

export default verifyAdmin;
