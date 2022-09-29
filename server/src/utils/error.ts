import { Response } from 'express';
import { AppError, AppErrorObj } from '../errors/AppError';

const handleError = (err: Error | AppError, res: Response) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json(AppErrorObj(err?.message))
    }

    return res.status(500).json(AppErrorObj((err as Error)?.message))
}

export { handleError };