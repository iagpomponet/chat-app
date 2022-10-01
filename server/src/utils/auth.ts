import { AppError } from "../errors/AppError";
import { ERRORS } from "../messages/errors";
import * as jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new AppError(ERRORS.NO_JWT_SECRET_FOUND);

  const token = jwt.sign({ ...user }, process.env.JWT_SECRET);
  console.log("token :>> ", token);

  return token;
};

export { generateAccessToken };
