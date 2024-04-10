import Product from "../models/productModel.js";

const loginUser = (req, res) => {
  res.json({ message: "login successfull" });
};

const registerUser = async (req, res) => {
  const d = await Product.findOne({ type: "init" });
  res.status(200).json({ message: d.message });
};
export { loginUser, registerUser };
