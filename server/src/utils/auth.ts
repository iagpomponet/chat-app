import { AppError } from "../errors/AppError";
import { ERRORS } from "../messages/responses";
import * as jwt from "jsonwebtoken";

const authCookieConfig = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

const authCookieName = "access_token";

const generateAccessToken = (user) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new AppError(ERRORS.NO_JWT_SECRET_FOUND);

  const token = jwt.sign({ ...user }, process.env.JWT_SECRET);
  console.log("token :>> ", token);

  return token;
};

export { generateAccessToken, authCookieConfig, authCookieName };
