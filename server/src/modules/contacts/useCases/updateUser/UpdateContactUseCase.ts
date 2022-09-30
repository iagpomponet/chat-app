import { ERRORS } from "../../../../messages/errors";
import { AppDataSource } from "../../../../data-source";
import { Contact } from "../../../../entity/Contact";
import { AppError } from "../../../../errors/AppError";


class UpdateUserUseCase {
    async execute(id: string, changes: Partial<Contact>){
        const repo = AppDataSource.getRepository(Contact);

        if(changes.id) delete changes.id;
        if(changes.createdAt) delete changes.createdAt;
        if(changes.updatedAt) delete changes.updatedAt;

        const contact = await repo.createQueryBuilder()
        .update(changes)
        .where({
            id
        })
        .returning('*')
        .execute();

        console.log('contact :>> ', contact);


        if(!contact){
            throw new AppError(ERRORS.NO_CONTACT_FOUND)
        }

        return contact.raw[0];
    }
}

export { UpdateUserUseCase };

