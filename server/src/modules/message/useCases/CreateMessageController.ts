import { Response } from "express";
import { CustomRequest } from "../../../types/express";
import { handleError } from "../../../utils/error";
import { defaultSuccessMessage } from "../../../utils/success";
import CreateMessageUseCase from "./CreateMessageUseCase";

class CreateMessageController {
  async handle(req: CustomRequest, res: Response) {
    const { fromEmail, toEmail, messageText, contactId, groupId } = req?.body;
    const service = new CreateMessageUseCase();

    try {
      const response = await service.execute({
        fromEmail,
        toEmail,
        messageText,
        contactId,
        groupId,
      });

      return res.json(defaultSuccessMessage(response));
    } catch (error) {
      return handleError(error, res);
    }
  }
}

export default CreateMessageController;
