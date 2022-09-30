import { Request, Response } from "express";
import { handleError } from "../../../../utils/error";
import { defaultSuccessMessage } from "../../../../utils/success";
import { DeleteContactUseCase } from "./DeleteContactUseCase";

class DeleteContactController {
    async handle(req: Request, res: Response){
        const { id } = req?.params;
        const useCase = new DeleteContactUseCase();

        try {
            const response = await useCase.execute(id);
            return res.status(200).json(defaultSuccessMessage(response));
        }
        catch(err){
            return handleError(err, res);
        }
    }
}

export { DeleteContactController };