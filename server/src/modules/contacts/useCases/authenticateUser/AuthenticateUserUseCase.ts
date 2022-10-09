import { compare } from "bcryptjs";
import { AppDataSource } from "../../../../data-source";
import { Contact } from "../../../../entity/Contact";
import { AppError } from "../../../../errors/AppError";
import { ERRORS } from "../../../../messages/responses";

interface AuthenticateUserUseCaseI {
    email: string;
    password: string;
}

class AuthenticateUserUseCase {
    async execute({email, password}: AuthenticateUserUseCaseI): Promise<Contact>{
        const repo = AppDataSource.getTreeRepository(Contact);
        const existingDocument = await repo.findOneBy({
            email,
        });

        if (!existingDocument) {
            // return error that should be handled outside
            throw new AppError(ERRORS.WRONG_CREDENTIALS);
        }

        const passwordCorrect = await compare(password, existingDocument.password);
        if(passwordCorrect) return existingDocument;

        throw new AppError(ERRORS.WRONG_CREDENTIALS);
    }
};

export { AuthenticateUserUseCase }