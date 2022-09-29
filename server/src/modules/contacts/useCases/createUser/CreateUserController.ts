import { Request, Response } from 'express';
import { AppError, AppErrorObj } from '../../../../errors/AppError';
import { CreateContactService } from './CreateContactUseCase';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { firstName, lastName, password, email } = req.body;
        const service = new CreateContactService();
        
        try {
            const response = await service.execute({firstName, lastName, password, email});
            return res.json(response);
        }
        catch(err) {
            if(err instanceof AppError){
                return res.status(err.statusCode).json(AppErrorObj(err?.message))
            }
    
            return res.status(500).json(AppErrorObj((err as Error)?.message))
        }
    }
}

export { CreateUserController };