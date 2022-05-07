import { Router } from 'express';
import { registersController } from '../../controllers/registersController.js';

const userRegisterRoute = Router();
userRegisterRoute.get('/registers', registersController);

export default userRegisterRoute;
