import { Router } from 'express';
import { registersController } from '../../controllers/registersController.js';
import { authRegistersMiddleware } from '../../middlewares/authRegistersMiddleware.js';

const userRegisterRoute = Router();
userRegisterRoute.get('/registers', authRegistersMiddleware, registersController);

export default userRegisterRoute;
