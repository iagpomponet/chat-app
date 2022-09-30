import { FindOptionsWhere } from "typeorm";
import { ERRORS } from "../../../../constants/errors";
import { AppDataSource } from "../../../../data-source";
import { Contact } from "../../../../entity/Contact";
import { AppError } from "../../../../errors/AppError";


// This receives a where object and uses to query the db to find contacts that match that query
class GetContactUseCase {
    // TODO: Don't let people filter contacts by photo, date or password
    async execute(where: FindOptionsWhere<Contact>) {
        const repo = AppDataSource.getRepository(Contact);

        const contact = await repo.findBy(where);

        console.log('contact :>> ', contact);
        console.log('where :>> ', where);
        if(!contact?.length){
            throw new AppError(ERRORS.NO_CONTACT_FOUND)
        }

        return contact;
    }
}

export { GetContactUseCase };