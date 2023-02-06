import { AppDataSource } from "../../../../data-source";
import { Contact } from "../../../../entity/Contact";
import GroupMember from "../../../../entity/GroupMember";
import { MessageGroup } from "../../../../entity/MessageGroup";

interface CreateGroupMemberProps {
  contactId: string;
  groupId: string;
}

class CreateGroupMemberUseCase {
  async execute({ contactId, groupId }: CreateGroupMemberProps) {
    const test = new Date().getDate().toString();

    debugger;

    const repo = AppDataSource.getRepository(GroupMember);
    const groupMember = repo.create({
      contact: contactId as Partial<Contact>,
      group: groupId as Partial<MessageGroup>,
    });

    console.log("groupMember :>> ", groupMember);

    await repo.save(groupMember);

    return groupMember;
  }
}

export { CreateGroupMemberUseCase };
