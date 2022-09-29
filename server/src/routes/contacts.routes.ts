import * as express from 'express';
import { AppError, AppErrorObj } from '../errors/AppError';
import { CreateUserController } from '../modules/contacts/useCases/createUser/CreateUserController';

const router = express.Router();

const createContactController = new CreateUserController();

// TODO: Uptade user 
// TODO: Delete user 
// TODO: Get user


// Create User
router.post('/signup', createContactController.handle)

// Get user by email
router.get('/', async (req, res) => {
    
})


export default router;