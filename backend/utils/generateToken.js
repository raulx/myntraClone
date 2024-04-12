import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("token", token, {
    path: "/",
    sameSite: "strict",
    secure: true,
    maxAge: 24 * 3600 * 1000,
    httpOnly: true,
  });
};

export default generateToken;
