import { Router } from 'express';
import { deleteRegisterController, registersController } from '../../controllers/registersController.js';
import { authRegistersMiddleware } from '../../middlewares/authRegistersMiddleware.js';
import authDeleteRegister from '../../middlewares/authDeleteRegisterMiddleware.js';
import balanceController from '../../controllers/balanceController.js';

const userRegisterRoute = Router();
userRegisterRoute.get('/registers', authRegistersMiddleware, registersController);
userRegisterRoute.get('/balance', authRegistersMiddleware, balanceController);
userRegisterRoute.delete('/registers', authDeleteRegister, deleteRegisterController);

export default userRegisterRoute;
