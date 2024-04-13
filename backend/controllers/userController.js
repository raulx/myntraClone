import Product from "../models/productModel.js";

const loginUser = (req, res) => {
  throw new Error("there are no users.");
};

const registerUser = async (req, res) => {
  const d = await Product.findOne({ type: "init" });
  res.status(200).json({ message: d.message });
};
export { loginUser, registerUser };
