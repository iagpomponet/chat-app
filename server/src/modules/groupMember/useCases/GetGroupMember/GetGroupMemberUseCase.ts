import { AppDataSource } from "../../../../data-source";
import GroupMember from "../../../../entity/GroupMember";

interface GetGroupMemberUseCase {
  where: any;
}

class GetGroupMemberUseCase {
  async execute({ where }) {
    const repo = AppDataSource.getRepository(GroupMember);

    console.log("where :>> ", where);
    const groupMember = await repo.find(where);

    console.log("groupMember :>> ", groupMember);

    return groupMember;
  }
}

export { GetGroupMemberUseCase };
