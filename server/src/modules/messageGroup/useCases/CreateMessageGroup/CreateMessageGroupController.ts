import { Response } from "express";
import { CustomRequest } from "../../../../types/express";
import { handleError } from "../../../../utils/error";
import { defaultSuccessMessage } from "../../../../utils/success";
import { CreateMessageGroupUseCase } from "./CreateMessageGroupUseCase";

class CreateMessageGroupController {
  async handle(req: CustomRequest, res: Response) {
    const { groupName } = req?.body;
    const service = new CreateMessageGroupUseCase();

    try {
      const response = await service.execute({ groupName });

      res.status(201).json(defaultSuccessMessage(response));
    } catch (err) {
      handleError(err, res);
    }
  }
}

export { CreateMessageGroupController };
