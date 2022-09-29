import { Request, Response } from 'express';
import { handleError } from '../../../../utils/error';
import { defaultSuccessMessage } from '../../../../utils/success';
import { GetUserUseCase } from './GetUserUseCase';

class GetUserController {
    async handle(req: Request, res: Response) {
        const query = req?.query;
        const getUserUseCase = new GetUserUseCase();

        try {
            const response = await getUserUseCase.execute(query);

            return res.status(200).json(defaultSuccessMessage(response));
        }
        catch(err) {
            handleError(err, res);
        }
    }
}

export { GetUserController };