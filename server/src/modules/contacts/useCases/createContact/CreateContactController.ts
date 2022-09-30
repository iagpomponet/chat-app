import { Request, Response } from 'express';
import { AppError, AppErrorObj } from '../../../../errors/AppError';
import { handleError } from '../../../../utils/error';
import { CreateContactUseCase } from './CreateContactUseCase';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { firstName, lastName, password, email } = req.body;
        const service = new CreateContactUseCase();
        
        try {
            const response = await service.execute({firstName, lastName, password, email});
            return res.json(response);
        }
        catch(err) {
            handleError(err, res);
        }
    }
}

export { CreateUserController };