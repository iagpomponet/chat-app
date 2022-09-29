import { Request, Response } from 'express';
import { handleError } from '../../../../utils/error';
import { defaultSuccessMessage } from '../../../../utils/success';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
    async handle(req: Request, res: Response) {
        // TODO: PREVENT USER TO UPDATE ITS ID
        const { id } = req?.params;
        const changes = req?.body;

        console.log('id :>> ', id);
        const getUserUseCase = new UpdateUserUseCase();

        try {
            const response = await getUserUseCase.execute(id, changes);

            return res.status(200).json(defaultSuccessMessage(response));
        }
        catch(err) {
            handleError(err, res);
        }
    }
}

export { UpdateUserController };