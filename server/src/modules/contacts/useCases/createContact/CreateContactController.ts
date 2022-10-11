import { Request, Response } from "express";
import { AppError, AppErrorObj } from "../../../../errors/AppError";
import { CustomRequest } from "../../../../types/express";
import { authCookieConfig, authCookieName } from "../../../../utils/auth";
import { handleError } from "../../../../utils/error";
import { CreateContactUseCase } from "./CreateContactUseCase";

class CreateUserController {
  async handle(req: CustomRequest, res: Response) {
    const { firstName, lastName, password, email } = req.body;
    const service = new CreateContactUseCase();

    try {
      const { data, token } = await service.execute({
        firstName,
        lastName,
        password,
        email,
      });
      return res.cookie(authCookieName, token, authCookieConfig).json(data);
    } catch (err) {
      handleError(err, res);
    }
  }
}

export { CreateUserController };
