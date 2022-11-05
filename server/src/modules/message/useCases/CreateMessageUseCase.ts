import { group } from "console";
import { AppDataSource } from "../../../data-source";
import { Contact } from "../../../entity/Contact";
import Message from "../../../entity/Message";
import { MessageGroup } from "../../../entity/MessageGroup";

interface CreateMessageUseCaseProps {
  fromEmail: string;
  toEmail: string;
  messageText: string;
  contactId: string;
  groupId: string;
}

class CreateMessageUseCase {
  async execute({
    fromEmail,
    toEmail,
    messageText,
    contactId,
    groupId,
  }: CreateMessageUseCaseProps) {
    const repo = AppDataSource.getRepository(Message);

    const message = repo.create({
      fromEmail,
      toEmail,
      messageText,
      sentDateTime: new Date(),
      contact: contactId as Partial<Contact>,
      group: groupId as Partial<MessageGroup>,
    });

    await repo.save(message);

    return message;
  }
}

export default CreateMessageUseCase;
