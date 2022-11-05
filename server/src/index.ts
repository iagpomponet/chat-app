import * as express from "express";
import * as morgan from "morgan";
import * as dotenv from "dotenv";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";

import { AppDataSource } from "./data-source";

import contactsRoutes from "./routes/contacts.routes";
import messageGroupRoutes from "./routes/messageGroup.routes";
import messageRoutes from "./routes/messages.routes";

// get config vars
dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.listen(3000, () => {
      console.log("server running");
    });

    app.use(cors());

    // development logs
    app.use(morgan("dev"));

    app.use(cookieParser());

    // this is for being able to get body json from request
    app.use(express.json());

    // routes
    app.use("/contacts", contactsRoutes);
    app.use("/messageGroup", messageGroupRoutes);
    app.use("/messages", messageRoutes);
  })
  .catch((error) => console.log(error));
