import Admin from "../models/adminModel.js";
import generateToken from "../utils/generateToken.js";

const loginAdmin = async (req, res) => {
  const { id, password } = req.body;
  const admin = await Admin.findOne({ id: id });
  if (admin) {
    generateToken(res, id);
    res.status(200).json({ id: id, password: password });
  } else {
    res.status(400).json({ err: "not found" });
  }
};

export { loginAdmin };
