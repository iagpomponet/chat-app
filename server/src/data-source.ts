import "reflect-metadata";
import { DataSource } from "typeorm";
import { Contact } from "./entity/Contact";
import Message from "./entity/Message";
import { MessageGroup } from "./entity/MessageGroup";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 15432,
  username: "postgres",
  password: "Postgres2019!",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Contact, MessageGroup, Message],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});
