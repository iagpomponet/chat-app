import "reflect-metadata"
import { DataSource } from "typeorm"
import { Contact } from "./entity/Contact"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 15432,
    username: "postgres",
    password: "Postgres2019!",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Contact],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
})
