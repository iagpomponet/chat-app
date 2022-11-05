import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import Message from "./Message";

@Entity("messageGroup")
export class MessageGroup {
  @PrimaryColumn()
  id: string;

  @Column()
  groupName: string;

  @OneToMany((message) => Message, (message) => message.group)
  messages: Message[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
