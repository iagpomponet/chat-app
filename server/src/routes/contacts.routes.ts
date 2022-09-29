import * as express from 'express';
import { CreateUserController } from '../modules/contacts/useCases/createUser/CreateUserController';
import { GetUserController } from '../modules/contacts/useCases/getUser/GetUserController';
import { UpdateUserController } from '../modules/contacts/useCases/updateUser/UpdateUserController';

const router = express.Router();

const createContactController = new CreateUserController();
const getUserController = new GetUserController();
const updateUserController = new UpdateUserController();

// TODO: Uptade user 
// TODO: Delete user 
// TODO: Get user


// Create User
router.post('/signup', createContactController.handle)

// Get user by query
router.get('/', getUserController.handle)

// update user
router.put('/:id', updateUserController.handle)


export default router;