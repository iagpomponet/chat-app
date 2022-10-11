import { Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { ERRORS, SUCCESS } from "../../../../messages/responses";
import { CustomRequest } from "../../../../types/express";
import {
  authCookieName,
  authCookieConfig,
  generateAccessToken,
} from "../../../../utils/auth";
import { handleError } from "../../../../utils/error";
import { defaultSuccessMessage } from "../../../../utils/success";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(req: CustomRequest, res: Response) {
    const { email, password } = req?.body;

    if (!email || !password) {
      const err = new AppError(ERRORS.WRONG_CREDENTIALS);
      return res.status(err.statusCode).json(handleError(err, res));
    }

    const useCase = new AuthenticateUserUseCase();

    try {
      const response = await useCase.execute({ email, password });
      const token = generateAccessToken(response);

      return res
        .cookie(authCookieName, token, authCookieConfig)
        .json(defaultSuccessMessage(SUCCESS.AUTH_SUCCESS));
    } catch (err) {
      handleError(err, res);
    }
  }
}

export { AuthenticateUserController };
