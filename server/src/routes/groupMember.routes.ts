import * as express from "express";
import { CreateGroupMemberController } from "../modules/groupMember/useCases/CreateGroupMember/CreateGroupMemberController";
import { GetGroupMemberController } from "../modules/groupMember/useCases/GetGroupMember/GetGroupMemberController";

const router = express.Router();

const createGroupMemberController = new CreateGroupMemberController();
const getGroupMemberController = new GetGroupMemberController();

router.get("/", getGroupMemberController.handle);
router.post("/", createGroupMemberController.handle);

export default router;
