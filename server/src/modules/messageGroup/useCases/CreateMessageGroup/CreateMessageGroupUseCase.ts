import { AppDataSource } from "../../../../data-source";
import { MessageGroup } from "../../../../entity/MessageGroup";
import { AppError } from "../../../../errors/AppError";
import { ERRORS } from "../../../../messages/responses";

export interface CreateMessageGroupProps {
  groupName: string;
}

class CreateMessageGroupUseCase {
  async execute({ groupName }: CreateMessageGroupProps) {
    const repo = AppDataSource.getRepository(MessageGroup);

    if (!groupName) {
      throw new AppError(ERRORS.NO_NAME_PROVIDED);
    }

    const group = repo.create({
      groupName,
    });

    console.log("group :>> ", group);

    await repo.save(group);

    return group;
  }
}

export { CreateMessageGroupUseCase };
