import * as express from 'express';
import * as morgan from 'morgan';

import { AppDataSource } from "./data-source"
import { Contact } from "./entity/Contact"

import contactsRoutes from './routes/contacts.routes';



AppDataSource.initialize().then(async () => {
    const app = express();

    app.listen(3000, () => {
        console.log('server running');
    })

    // development logs
    app.use(morgan('dev'));

    // this is for being able to get body json from request
    app.use(express.json());

    app.use('/contacts', contactsRoutes);
}).catch(error => console.log(error))


