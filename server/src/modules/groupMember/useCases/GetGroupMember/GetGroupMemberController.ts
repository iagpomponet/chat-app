import { Response } from "express";
import { CustomRequest } from "../../../../types/express";
import { handleError } from "../../../../utils/error";
import { defaultSuccessMessage } from "../../../../utils/success";
import { GetGroupMemberUseCase } from "./GetGroupMemberUseCase";

class GetGroupMemberController {
  async handle(req: CustomRequest, res: Response) {
    const service = new GetGroupMemberUseCase();

    try {
      const { contact } = req?.body;
      const payload = {
        contact,
      };

      const response = await service.execute({ where: payload });
      console.log("response :>> ", response);

      res.status(201).json(defaultSuccessMessage(response));
    } catch (err) {
      handleError(err, res);
    }
  }
}

export { GetGroupMemberController };
