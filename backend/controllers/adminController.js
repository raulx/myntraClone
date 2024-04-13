import Admin from "../models/adminModel.js";
import asyncHandler from "express-async-handler";

import generateAdminToken from "../utils/generateToken.js";

const loginAdmin = asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  const admin = await Admin.findOne({ id: id }).select("-_id");
  if (admin) {
    if (admin.password === password) {
      generateAdminToken(res, id);
      res.status(200).json({ status: 200, admin });
    } else {
      throw new Error("Password do not matched !");
    }
  } else {
    throw new Error("No User Found with this id");
  }
});
export { loginAdmin };
