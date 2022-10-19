import { Request, Response } from "express";
import { CustomRequest } from "../../../../types/express";
import { handleError } from "../../../../utils/error";
import { defaultSuccessMessage } from "../../../../utils/success";
import { GetContactUseCase } from "./GetContactUseCase";

class GetContactController {
  async handle(req: CustomRequest, res: Response) {
    const userId = req.user;
    const where = req?.query;
    const query = Object.keys(where).length ? where : userId;
    const getUserUseCase = new GetContactUseCase();

    try {
      const response = await getUserUseCase.execute(query);

      return res.status(200).json(defaultSuccessMessage(response));
    } catch (err) {
      handleError(err, res);
    }
  }
}

export { GetContactController };
