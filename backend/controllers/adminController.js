import Admin from "../models/adminModel.js";
import generateToken from "../utils/generateToken.js";

const loginAdmin = async (req, res) => {
  const { id, password } = req.body;
  try {
    const admin = await Admin.findOne({ id: id }).select("-_id");

    if (admin) {
      if (admin.password === password) {
        generateToken(res, id);
        res.json({ status: "fullfilled", data: admin });
      } else {
        throw new Error("Password do not match !");
      }
    } else {
      throw new Error("User not Found");
    }
  } catch (err) {
    res.json({ status: "error", message: err.message });
  }
};

export { loginAdmin };
