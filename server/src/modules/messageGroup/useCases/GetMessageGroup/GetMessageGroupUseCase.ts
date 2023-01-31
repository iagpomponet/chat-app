import { AppDataSource } from "../../../../data-source";
import { MessageGroup } from "../../../../entity/MessageGroup";

interface GetMessageGroupProps {
  groupId: string;
}

class GetMessageGroupUseCase {
  async execute({ groupId }: GetMessageGroupProps) {
    const repo = AppDataSource.getRepository(MessageGroup);
    const group = repo.findBy({ id: groupId });

    return group;
  }
}

export { GetMessageGroupUseCase };
