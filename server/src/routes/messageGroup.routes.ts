import * as express from "express";
import { CreateMessageGroupController } from "../modules/messageGroup/useCases/CreateMessageGroup/CreateMessageGroupController";

const router = express.Router();

const createMessageGroupController = new CreateMessageGroupController();

// Create
router.post("/", createMessageGroupController.handle);

export default router;
