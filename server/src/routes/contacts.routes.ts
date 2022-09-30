import * as express from 'express';
import { CreateUserController } from '../modules/contacts/useCases/createContact/CreateContactController';
import { DeleteContactController } from '../modules/contacts/useCases/deleteContact/DeleteContactController';
import { GetContactController } from '../modules/contacts/useCases/getUser/GetContactController';
import { UpdateUserController } from '../modules/contacts/useCases/updateUser/UpdateContactController';

const router = express.Router();

const createContactController = new CreateUserController();
const getUserController = new GetContactController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteContactController();

// TODO: Uptade user 
// TODO: Delete user 
// TODO: Get user


// Create User
router.post('/signup', createContactController.handle);

// Get user by query
router.get('/', getUserController.handle);

// update user
router.put('/:id', updateUserController.handle);

//delete user
router.delete('/:id', deleteUserController.handle);


export default router;