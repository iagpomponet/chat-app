import { Response } from "express";
import { CustomRequest } from "../../../../types/express";
import { handleError } from "../../../../utils/error";
import { defaultSuccessMessage } from "../../../../utils/success";
import { GetMessageGroupUseCase } from "./GetMessageGroupUseCase";

class GetMessageGroupController {
  async handle(req: CustomRequest, res: Response) {
    try {
      const groupId = req?.query?.groupId;

      const service = new GetMessageGroupUseCase();
      const response = await service.execute({ groupId: groupId as string });
      res.status(201).json(defaultSuccessMessage(response));
    } catch (err) {
      handleError(err, res);
    }
  }
}

export { GetMessageGroupController };
