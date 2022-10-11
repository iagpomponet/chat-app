import * as jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entity/Contact";
import { AppError } from "../errors/AppError";
import { ERRORS } from "../messages/responses";
import { CustomRequest } from "../types/express";

export const HandleAuth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  // Check if request have jwt and compare it
  const { access_token: accessToken } = req?.cookies;

  try {
    const { sub: userId } = jwt.verify(accessToken, process.env.JWT_SECRET);
    // TODO: Get and validate cookie token

    if (userId) {
      const contactRepository = AppDataSource.getRepository(Contact);
      const user = await contactRepository.find({
        where: {
          id: userId as string,
        },
      });

      if (!user) {
        throw new AppError(ERRORS.USER_DOES_NOT_EXIST);
      }

      if (userId) {
        req.user = {
          id: userId as string,
        };

        next();
      }
    }
  } catch (err) {
    throw new AppError(ERRORS.INVALID_TOKEN, 401);
  }
};
