import { AppError } from "../errors/AppError";
import { ERRORS } from "../messages/responses";
import * as jwt from "jsonwebtoken";
import { Contact } from "../entity/Contact";
import { CookieOptions } from "express";

const authCookieConfig: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
};

const authCookieName = "access_token";

const generateAccessToken = (user: Contact) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new AppError(ERRORS.NO_JWT_SECRET_FOUND);

  const token = jwt.sign({}, process.env.JWT_SECRET, {
    subject: user.id,
    expiresIn: "1d",
  });

  return token;
};

export { generateAccessToken, authCookieConfig, authCookieName };
