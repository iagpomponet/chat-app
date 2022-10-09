import { Request, Response } from "express";
import { token } from "morgan";
import { json } from "stream/consumers";
import { AppError } from "../../../../errors/AppError";
import { ERRORS, SUCCESS } from "../../../../messages/responses";
import { authCookieName, authCookieConfig, generateAccessToken } from "../../../../utils/auth";
import { handleError } from "../../../../utils/error";
import { defaultSuccessMessage } from "../../../../utils/success";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handle(req: Request, res: Response){
        const { email, password} = req?.body;
        
        if(!email || !password){
            const err = new AppError(ERRORS.WRONG_CREDENTIALS);
            return res.status(err.statusCode).json(handleError(err, res));
        }

        const useCase = new AuthenticateUserUseCase();
        
        try {
            const response = await useCase.execute({email, password});
            const token = generateAccessToken(response);
            console.log('response :>> ', response);

            return res.cookie(authCookieName, token, authCookieConfig).json(defaultSuccessMessage(SUCCESS.AUTH_SUCCESS))
        }
        catch(err){
            handleError(err, res);
        }
    }
}

export { AuthenticateUserController };