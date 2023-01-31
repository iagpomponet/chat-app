import { Response } from "express";
import { CustomRequest } from "../../../../types/express";
import { handleError } from "../../../../utils/error";
import { defaultSuccessMessage } from "../../../../utils/success";
import { CreateGroupMemberUseCase } from "./CreateGroupMemberUseCase";

class CreateGroupMemberController {
  async handle(req: CustomRequest, res: Response) {
    const service = new CreateGroupMemberUseCase();

    try {
      const { contactId, groupId } = req?.body;
      const response = await service.execute({
        contactId,
        groupId,
      });

      console.log("response :>> ", response);

      res.status(201).json(defaultSuccessMessage(response));
    } catch (err) {
      handleError(err, res);
    }
  }
}

export { CreateGroupMemberController };
