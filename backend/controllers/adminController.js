import Admin from "../models/adminModel.js";
import asyncHandler from "express-async-handler";

import generateAdminToken from "../utils/generateToken.js";

const loginAdmin = asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  const admin = await Admin.findOne({ id: id }).select("-_id");
  if (admin) {
    if (await admin.matchPassword(password)) {
      generateAdminToken(res, id);
      res.status(200).json({ status: 200, admin });
    } else {
      throw new Error("Password do not matched !");
    }
  } else {
    throw new Error("No User Found with this id");
  }
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  const adminExits = await Admin.findOne({ id: id });
  if (adminExits) {
    throw new Error("Admin already Exits with this id,login to continue");
  } else {
    const newUserData = { id: id, password: password };
    try {
      const newUser = await Admin.create(newUserData);
      generateAdminToken(res, newUser.id);
      res.json({ message: "User created successfully", newUser });
    } catch (err) {
      throw new Error(err);
    }
  }
});

const addProduct = asyncHandler(async (req, res) => {
  const { userId } = req.token;
  const { title, brand } = req.body;
  res.json({
    message: "products added",
    forId: userId,
    title: JSON.parse(title),
    brand: brand,
  });
});
export { loginAdmin, addProduct, registerAdmin };
