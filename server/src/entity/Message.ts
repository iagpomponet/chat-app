import {
  Column,
  Entity,
  PrimaryColumn,
  Timestamp,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Contact } from "./Contact";
import { MessageGroup } from "./MessageGroup";

@Entity("message")
class Message {
  @PrimaryColumn()
  messageId: string;

  @Column()
  fromEmail: string;

  @Column()
  toEmail: string;

  @Column()
  messageText: string;

  @CreateDateColumn()
  sentDateTime: Timestamp;

  @ManyToOne(() => Contact)
  contact: Contact;

  @ManyToOne(() => MessageGroup, (messageGroup) => messageGroup.messages, {
    eager: true,
  })
  group: MessageGroup;

  constructor() {
    if (!this.messageId) {
      this.messageId = uuid();
    }
  }
}

export default Message;
