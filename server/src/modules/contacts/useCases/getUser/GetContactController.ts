import { Request, Response } from 'express';
import { handleError } from '../../../../utils/error';
import { defaultSuccessMessage } from '../../../../utils/success';
import { GetContactUseCase } from './GetContactUseCase';

class GetContactController {
    async handle(req: Request, res: Response) {
        const query = req?.query;
        const getUserUseCase = new GetContactUseCase();

        try {
            const response = await getUserUseCase.execute(query);

            return res.status(200).json(defaultSuccessMessage(response));
        }
        catch(err) {
            handleError(err, res);
        }
    }
}

export { GetContactController };