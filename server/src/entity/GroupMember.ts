import {
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "./Contact";
import { MessageGroup } from "./MessageGroup";

@Entity()
class GroupMember {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Contact, { eager: true })
  contact: Contact;

  @OneToOne(() => MessageGroup, { eager: true })
  group: MessageGroup;

  @CreateDateColumn()
  joinedDateTime: string;

  @UpdateDateColumn()
  leftDateTime: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default GroupMember;
