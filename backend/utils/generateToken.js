import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("token", token, {
    path: "/",
    sameSite: "strict",
    secure: true,
    maxAge: 900000000,
    httpOnly: true,
  });
};

export default generateToken;
