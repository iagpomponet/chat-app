import * as express from "express";
import { CreateMessageGroupController } from "../modules/messageGroup/useCases/CreateMessageGroup/CreateMessageGroupController";
import { GetMessageGroupController } from "../modules/messageGroup/useCases/GetMessageGroup/GetMessageGroupController";

const router = express.Router();

const createMessageGroupController = new CreateMessageGroupController();
const getMessageGroupController = new GetMessageGroupController();

// Create
router.post("/", createMessageGroupController.handle);

// Get message group
router.get("/", getMessageGroupController.handle);

export default router;
