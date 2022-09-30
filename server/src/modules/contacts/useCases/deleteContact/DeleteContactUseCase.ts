import { ERRORS } from "../../../../constants/errors";
import { AppDataSource } from "../../../../data-source";
import { Contact } from "../../../../entity/Contact";
import { AppError } from "../../../../errors/AppError";

class DeleteContactUseCase {
    async execute(id: string){
        const repo = AppDataSource.getRepository(Contact);
        const response = await repo.delete(id);

        if(response.affected === 0){
            throw new AppError(ERRORS.NO_CONTACT_FOUND)
        }

        console.log('response :>> ', response);

        return "Contact deleted";
    }
}

export { DeleteContactUseCase };