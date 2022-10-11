import * as express from "express";
import * as morgan from "morgan";
import * as dotenv from "dotenv";
import * as cookieParser from 'cookie-parser';

import { AppDataSource } from "./data-source";
import { Contact } from "./entity/Contact";

import contactsRoutes from "./routes/contacts.routes";

// get config vars
dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.listen(3000, () => {
      console.log("server running");
    });

    // development logs
    app.use(morgan("dev"));

    app.use(cookieParser());

    // this is for being able to get body json from request
    app.use(express.json());

    app.use("/contacts", contactsRoutes);
  })
  .catch((error) => console.log(error));
