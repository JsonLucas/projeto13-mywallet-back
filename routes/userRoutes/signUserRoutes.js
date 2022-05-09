import { Router } from 'express';
import { signUpController } from '../../controllers/signUpController.js';
import { loginControlller } from '../../controllers/loginController.js';
import authLogin from '../../middlewares/authLoginMiddleware.js';
import authSinUpMiddleware from '../../middlewares/authSignUpMiddleware.js';
import activeSessionMiddleware from '../../middlewares/authActiveSessionMiddleware.js';
import activeSessionContorller from '../../controllers/activeSessionController.js';

const signUserRoutes = Router();
signUserRoutes.post('/login', authLogin, loginControlller);
signUserRoutes.get('/login', activeSessionMiddleware, activeSessionContorller);
signUserRoutes.post('/sign-up', authSinUpMiddleware, signUpController);

export default signUserRoutes;