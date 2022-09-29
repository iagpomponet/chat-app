import { hash } from 'bcryptjs';
import { ERRORS } from "../../../../constants/errors";
import { AppDataSource } from "../../../../data-source";
import { Contact } from "../../../../entity/Contact";
import { AppError } from "../../../../errors/AppError";


interface ContactRequest {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export class CreateContactService {
    async execute({ firstName, lastName, password, email }: ContactRequest) : Promise<Contact>{
        // TODO: Should not create an user with an existing email
        // TODO: We should encrypt password
        // TODO: Should create a commom error for the application
        // TODO: Handle better the cases when one of the params above are null
        
        const repo = AppDataSource.getRepository(Contact);

        const existingDocument = await repo.findOneBy({
            email,
        });

        if(existingDocument){
            // return error that should be handled outside
            throw new AppError(ERRORS.EMAIL_IN_USE);
        }

        const hashedPassword = await hash(password, 10);

        const contact = repo.create({
            firstName,
            lastName,
            password: hashedPassword,
            email,
            profilePhoto: "https://miro.medium.com/max/316/1*LGHbA9o2BKka2obwwCAjWg.jpeg"
        });

        await repo.save(contact);

        return contact;
    }
}