import { hash } from "bcryptjs";
import { ERRORS } from "../../../../messages/responses";
import { AppDataSource } from "../../../../data-source";
import { Contact } from "../../../../entity/Contact";
import { AppError } from "../../../../errors/AppError";
import { generateAccessToken } from "../../../../utils/auth";

interface ContactRequest {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

class CreateContactUseCase {
  async execute({
    firstName,
    lastName,
    password,
    email,
  }: ContactRequest): Promise<{data: Contact, token: string }> {
    // TODO: Should create a commom error for the application
    // TODO: Handle better the cases when one of the params above are null
    // TODO: Create token for auth

    const repo = AppDataSource.getRepository(Contact);

    const existingDocument = await repo.findOneBy({
      email,
    });

    if (existingDocument) {
      // return error that should be handled outside
      throw new AppError(ERRORS.EMAIL_IN_USE);
    }

    const hashedPassword = await hash(password, 10);

    const contact = repo.create({
      firstName,
      lastName,
      password: hashedPassword,
      email,
      profilePhoto:
        "https://miro.medium.com/max/316/1*LGHbA9o2BKka2obwwCAjWg.jpeg",
    });

    await repo.save(contact);

    // Create user token
    const token = generateAccessToken(contact);

    return {
      data: {...contact},
      token,
    };
  }
}

export { CreateContactUseCase };
