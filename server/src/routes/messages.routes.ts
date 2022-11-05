import * as express from "express";
import { AppDataSource } from "../data-source";
import Message from "../entity/Message";
import CreateMessageController from "../modules/message/useCases/CreateMessageController";

const router = express.Router();

const createMessageController = new CreateMessageController();

// Create
router.post("/", createMessageController.handle);

router.get("/", async (req, res) => {
  const repo = AppDataSource.getRepository(Message);
  const response = await repo.find();

  return res.json(response);
});

export default router;
