import jwt from "jsonwebtoken";

const generateAdminToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_ADT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("_adt", token, {
    path: "/",
    sameSite: "strict",
    secure: true,
    maxAge: 24 * 3600 * 1000,
    httpOnly: true,
  });
};

export default generateAdminToken;
