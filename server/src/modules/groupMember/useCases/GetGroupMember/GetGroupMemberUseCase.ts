import { AppDataSource } from "../../../../data-source";
import GroupMember from "../../../../entity/GroupMember";

interface GetGroupMemberUseCase {
  where: any;
}

class GetGroupMemberUseCase {
  async execute({ where }) {
    const repo = AppDataSource.getRepository(GroupMember);
    const groupMember = repo.findBy(where);

    return groupMember;
  }
}

export { GetGroupMemberUseCase };
