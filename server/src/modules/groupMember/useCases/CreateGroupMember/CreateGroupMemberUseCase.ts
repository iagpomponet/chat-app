import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { Contact } from "../../../../entity/Contact";
import GroupMember from "../../../../entity/GroupMember";
import { MessageGroup } from "../../../../entity/MessageGroup";

interface CreateGroupMemberProps {
  contactId: any;
  groupId: string;
}

class CreateGroupMemberUseCase {
  async execute({ contactId, groupId }: CreateGroupMemberProps) {
    const repo = AppDataSource.getRepository(GroupMember);
    const groupMember = repo.create({
      contact: contactId as Partial<Contact>,
      group: groupId as Partial<MessageGroup>,
      joinedDateTime: new Date().getDate().toString(),
      leftDateTime: null,
    });

    await repo.save(groupMember);

    return groupMember;
  }
}

export { CreateGroupMemberUseCase };
