import {Router} from 'express';
import { logoutController } from '../../controllers/logoutController.js';
import authLogoutMiddleware from '../../middlewares/logoutMiddleware.js';

const logout = Router();
logout.delete('/logout', authLogoutMiddleware, logoutController);

export default logout;